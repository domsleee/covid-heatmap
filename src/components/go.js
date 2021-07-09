import { setupFloatingEl } from './FloatingEl/FloatingEl';
import { loadGMaps } from './util/GmapsLoader';
import { loadMapbox } from './util/MapboxLoader';

const MODE = 'mapbox';

export async function go() {
  if (getMode() == 'gmaps') {
    const map = loadGMaps();
    setupFloatingEl(map);
  } else {
    const map = await loadMapbox();
  }
  return;
}

export function getMode() {
  if (MODE == 'gmaps' || localStorage.useGoogleMaps === 'true') {
    return 'gmaps';
  }
  return 'mapbox';
}
