import { setupFloatingEl } from './FloatingEl/FloatingEl';
import { loadGMaps } from './util/GmapsLoader';
import { loadMapbox } from './util/MapboxLoader';

const MODE = 'mapbox';

export async function go() {
  if (MODE == 'gmaps' || localStorage.useGoogleMaps === 'true') {
    const map = loadGMaps();
    setupFloatingEl(map);
  } else {
    const map = loadMapbox();
  }
}
