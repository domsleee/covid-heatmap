import { PostCodeData } from './helpers/postCodeData';
import { PostCodeResolver } from './helpers/postCodeResolver';
const dissolve = require('geojson-dissolve');

const geojsonFile = __dirname + '/../public/suburb-10-nsw.geojson';
const geojsonOutFile = __dirname + '/../public/suburb-10-nsw-proc.geojson';


async function main() {
  const postCodeResolver = new PostCodeResolver();
  const postCodeData = new PostCodeData();
  await postCodeResolver.init(); // getPostCodeCount(postcode)
  await postCodeData.init(); // getSuburbFromFeature(feature)

  const fs = require('fs');
  const postCodeToFeatures = {};

  let rawdata = fs.readFileSync(geojsonFile);
  let data = JSON.parse(rawdata);
  data.features.forEach(feature => {
    const tFeature = JSON.parse(JSON.stringify(feature));
    tFeature.j = tFeature.properties;
    delete tFeature.properties;
    var postCode = postCodeResolver.getPostCodeFromFeature(tFeature);
    if (!(postCode in postCodeToFeatures)) postCodeToFeatures[postCode] = {'features': [], 'suburbs': new Set()};
    postCodeToFeatures[postCode].features.push(feature);
    postCodeToFeatures[postCode].suburbs.add(postCodeResolver.getSuburbFromFeature(tFeature));
  });

  // postcode, suburbs, #features

  const outData = {type: "FeatureCollection", features: []};
  for (const [postCode, value] of Object.entries(postCodeToFeatures)) {
    value.suburbs = [...value.suburbs];
    const newFeature = {"type": "Feature", "properties": {"suburb": value.suburbs.join(', ')}};
    if (value.features.length > 1) {
      newFeature.geometry = dissolve(value.features);
    } else {
      newFeature.geometry = value.features[0].geometry;
    }
    newFeature.properties.cases = postCodeData.getPostCodeCount(postCode);
    newFeature.properties.postCode = postCode;
    outData.features.push(newFeature);
  }
  fs.writeFileSync(geojsonOutFile, JSON.stringify(outData, null, 1));


  //console.log(postCodeToFeatures);
}

main();