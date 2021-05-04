import { isDevelopmentEnv, BASEPATH } from '../env';

export const HEATMAP_DATA_BASEURL = "https://domsleee.github.io/covid-heatmap-data";
export const GEOJSON_URL = (isDevelopmentEnv ? BASEPATH + '/proc' : HEATMAP_DATA_BASEURL) + '/suburb-10-nsw-proc.geojson';
