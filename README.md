# COVID Heatmap

[Live link](https://domsleee.github.io/covid-heatmap/)

This project uses a data repository that is synced from data from NSW government [here](https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location/resource/21304414-1ff1-4243-a5d2-f52778048b29). This data identifies the number of cases per postcode.

The geojson data that is a polygon for each postcode is a smoothed out version from here:
https://github.com/tonywr71/GeoJson-Data.

## Project structure

* `dissolve_polygons`: Scripts use to smooth the geojson data (for size/performance reasons)
* `src`: Source of client app
* [Data repository](https://github.com/domsleee/covid-heatmap-data)
  - repository for synced data
  - has AWS scripts for syncing

## Setup
Environment variable `VUE_APP_MAPBOX_API` is used for Mapbox GLJS. You can set this by adding a `.env` file in the root of the project.

To run locally, `npm install` and then `npm run serve`.
