import { GEOJSON_URL } from './defs';
import { heatMapColorforValue } from './util';

export function loadGMaps() {
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(-33.8688, 151.2093),
    }
  );

  map.data.loadGeoJson(GEOJSON_URL);
  map.data.setStyle(function(feature) {
    const v = feature.getProperty('cases');
    const color = heatMapColorforValue(v);
    return {
      fillColor: color,
      strokeWeight: 1,
      fillOpacity: .5,
    };
  });
  return map;
}