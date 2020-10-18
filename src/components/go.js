import { BASEPATH, isDevelopmentEnv } from './env';
import { LegendDefs } from './LegendDefs';

const myEl = document.createElement('div');
myEl.classList.add("floatingEl");
myEl.style.display = "none";
document.body.appendChild(myEl);

const MAX_CASES = 60;
const HEATMAP_DATA_BASEURL = "https://domsleee.github.io/covid-heatmap-data";
const GEOJSON_URL = (isDevelopmentEnv ? BASEPATH + '/sample' : HEATMAP_DATA_BASEURL) + '/suburb-10-nsw-proc.geojson';
let textChangeableState = {
  mapMouseDown: false,
  temporarilyOff: false
};

function isTextChangeable() {
  return !textChangeableState.mapMouseDown && !textChangeableState.temporarilyOff;
}


function heatMapColorforValue(value) {
  if (value / LegendDefs.MAX_CASES > 1.0) {
    //console.log(value);
  }
  const normalized = Math.min(1.0, value / MAX_CASES);
  const h = (1.0 - normalized) * 240
  "hsl(" + h + ", 100%, 50%)";

  // https://colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=9
  const grad = LegendDefs.LEGEND_GRADIENT;
  const ind = Math.min(Math.floor((grad.length * value)/LegendDefs.MAX_CASES), grad.length-1);
  return grad[ind];
}

export async function go() {
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(-33.8688, 151.2093),
    }
  );

  map.data.loadGeoJson(GEOJSON_URL);
  map.data.setStyle(function(feature) {
    const properties = feature.j;
    const v = properties.cases;
    var color = heatMapColorforValue(v);
    return {
      fillColor: color,
      strokeWeight: 1,
      fillOpacity: .5,
    };
  });

  document.body.addEventListener('mousemove', function(event) {
    const top = event.clientY;
    const left = event.clientX;
    myEl.style.top = (top + 5) + "px";
    myEl.style.left = (left + 5) + "px";
  })

  map.data.addListener('mousemove', function(event) {
   // console.log('mousemove');
    const properties = event.feature.j;
    myEl.style.display = "block";
    if (isTextChangeable()) myEl.innerHTML = `Postcode: ${properties.postCode}<br />Cases: ${properties.cases}<br />Suburbs: ${properties.suburb}`;
  });
  
  map.data.addListener('mouseout', function() {
    //console.log('mouseout', event);
    if (isTextChangeable()) myEl.innerHTML = ``;
  });

  map.data.addListener('mousedown', () => {
    //console.log("map mouse down...");
    textChangeableState.mapMouseDown = true;
    window.myEl = myEl;
  });

  map.data.addListener('mouseup', () => {
    //console.log("map mouse up...");
    textChangeableState.mapMouseDown = false;
    textChangeableState.temporarilyOff = true;
    setTimeout(() => textChangeableState.temporarilyOff = false, 50);
  });
}
