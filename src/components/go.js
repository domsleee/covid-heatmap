import { setupFloatingEl } from './FloatingEl/FloatingEl';
import { loadGMaps } from './util/GmapsLoader';

export async function go() {
  const map = loadGMaps();
  setupFloatingEl(map);
}