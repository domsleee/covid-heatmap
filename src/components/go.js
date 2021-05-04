import { BASEPATH, isDevelopmentEnv } from './env';
import { LegendDefs } from './LegendDefs';
import { setupFloatingEl } from './FloatingEl/FloatingEl';

const HEATMAP_DATA_BASEURL = "https://domsleee.github.io/covid-heatmap-data";
const GEOJSON_URL = (isDevelopmentEnv ? BASEPATH + '/proc' : HEATMAP_DATA_BASEURL) + '/suburb-10-nsw-proc.geojson';

export async function go() {
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(-33.8688, 151.2093),
    }
  );

  map.data.loadGeoJson(GEOJSON_URL);
  map.data.setStyle(function(feature) {
    console.log("go feature...");
    const v = feature.getProperty('cases');
    var color = heatMapColorforValue(v);
    return {
      fillColor: color,
      strokeWeight: 1,
      fillOpacity: .5,
    };
  });

  setupFloatingEl(map);
}

function heatMapColorforValue(value) {
  if (value / LegendDefs.MAX_CASES > 1.0) {
    console.log(`WARNING: exceeds max gradient ${value}`);
  }
  const normalized = Math.min(1.0, value / LegendDefs.MAX_CASES);
  const h = (1.0 - normalized) * 240
  "hsl(" + h + ", 100%, 50%)";

  // https://colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=9
  const grad = LegendDefs.LEGEND_GRADIENT;
  const ind = Math.min(Math.floor((grad.length * value)/LegendDefs.MAX_CASES), grad.length-1);
  return grad[ind];
}
