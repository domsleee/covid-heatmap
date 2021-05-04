import { LegendDefs } from '../LegendDefs';

export function heatMapColorforValue(value) {
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
