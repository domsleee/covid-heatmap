import { PostCodeData } from './postCodeData';
import { PostCodeResolver } from './postCodeResolver';
import { BASEPATH } from './env';

const myEl = document.createElement('div');
myEl.classList.add("floatingEl");
myEl.style.display = "none";
document.body.appendChild(myEl);

const MAX_CASES = 30;
const GEOJSON_URL = BASEPATH + '/suburb-10-nsw.geojson';


function heatMapColorforValue(value) {
  if (value / MAX_CASES > 1.0) {
    //console.log(value);
  }
  const normalized = Math.min(1.0, value / MAX_CASES);
  const h = (1.0 - normalized) * 240
  return "hsl(" + h + ", 100%, 50%)";
}

export async function go() {
  const postCodeData = new PostCodeData();
  await postCodeData.init();
  const postCodeResolver = new PostCodeResolver();
  await postCodeResolver.init();

  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(-33.8688, 151.2093)
    }
  );

  map.data.loadGeoJson(GEOJSON_URL);

  map.data.setStyle(function(feature) {
    const postCode = postCodeResolver.getPostCodeFromFeature(feature);
    if (postCode == -1) return {};
    const v = postCodeData.getPostCodeCount(postCode);
    var color = heatMapColorforValue(v);
    return {
      fillColor: color,
      strokeWeight: 1
    };
  });

  document.body.addEventListener('mousemove', function(event) {
    const top = event.clientY;
    const left = event.clientX;
    myEl.style.top = (top + 5) + "px";
    myEl.style.left = (left + 5) + "px";
  })

  map.data.addListener('mousemove', function(event) {
    const postCode = postCodeResolver.getPostCodeFromFeature(event.feature);
    myEl.style.display = "block";
    myEl.innerHTML = "postCode: " + postCode + "<br />#cases: " + postCodeData.getPostCodeCount(postCode) + "<br />suburb: " + postCodeResolver.getSuburbFromFeature(event.feature);
  });
  
  map.data.addListener('mouseout', function() {
    //map.data.revertStyle();
  });
}