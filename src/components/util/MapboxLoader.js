import { LegendDefs } from '../LegendDefs';
const ellipsize = require('ellipsize');

export function loadMapbox() {
  return new Promise((res, reject) => {
    let accessToken = process.env.VUE_APP_MAPBOX_API;
    if (!accessToken) accessToken = 'pk.eyJ1IjoiZG9tc2xlZSIsImEiOiJja281dHIzamMwdWN5MnByd2U2dHh2dHN3In0.HsDJnEgqjq_Gewlzt6NGew';
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [151.21, -33.86], // starting position [lng, lat]
      zoom: 11.5 // starting zoom
    });
  
    // https://webglreport.com/
    map.on('load', () => {
      const sourceCallback = () => {
        if (map.getSource('suburbs') && map.isSourceLoaded('suburbs')) {
          res('loaded');
        }
      }
      map.on('sourcedata', sourceCallback);

      window.mapbox = map;
      map.scrollZoom.setWheelZoomRate(1/2);
      map.addSource('suburbs', {
        type: 'geojson',
        data: 'https://domsleee.github.io/covid-heatmap-data/suburb-10-nsw-proc.geojson'
      });

  
      map.addLayer({
        'id': 'cases-layer',
        'type': 'fill',
        'source': 'suburbs',
        'paint': {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'cases'],
            ...getGradientArray()
          ],
          'fill-opacity': 0.5
        }
      });
  
      map.addLayer({
        'id': 'line-layer',
        'type': 'line',
        'source': 'suburbs',
        'paint': {
          "line-color": "#000000",
          'line-width': 1
        }
      });
    });
    addPopup(map);
  
    if (mapboxgl.supported({failIfMajorPerformanceCaveat: true})) {
      console.log("HARDWARE MODE");
    } else {
      console.log("SOFTWARE MODE");
    }
  })
  
}

function getGradientArray() {
  const numGrads = LegendDefs.LEGEND_GRADIENT.length;
  const ret = [];
  for (let i = 0; i < numGrads; ++i) {
    ret.push(Math.floor(i * LegendDefs.MAX_CASES / numGrads));
    ret.push(LegendDefs.LEGEND_GRADIENT[i]);
  }
  return ret;
}

function addPopup(map) {
  const popup = new mapboxgl.Popup({closeButton: false, closeOnClick: false, className: 'myFloatingEl'})
    .trackPointer()
    .setHTML('loading...')
    .addTo(map);

  map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point);

    if (features.length) {
      const props = features[0].properties;
      const html = 'cases' in props
        ? `Postcode: ${props.postCode}<br />Cases: ${props.cases}<br />Suburbs: ${ellipsize(props.suburb, 200, {truncate: false, ellipse: ' ...'})}`
        : 'unknown';
      popup.setHTML(html);
    }
  });
}
