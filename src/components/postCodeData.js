const axios = require('axios');
const csvtojsonV2 = require("csvtojson/v2");
import { BASEPATH } from './env';

// https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location

const URL = BASEPATH + '/cases-by-postcode.csv';


export class PostCodeData {
  postCodeMap_ = {};
  suburbToPostCode_ = {};

  async init() {

    const postCodeDataCsv = await axios.get(URL);
    const postCodeData = await csvtojsonV2({output: "csv"}).fromString(postCodeDataCsv.data);
    for (const [date, postCode] of postCodeData) {
      //console.log(date, postCode);
      date;
      if (!(postCode in this.postCodeMap_)) this.postCodeMap_[postCode] = 0;
      this.postCodeMap_[postCode]++;
    }
  }

  getPostCodeCount(postCode) {
    if (postCode in this.postCodeMap_) return this.postCodeMap_[postCode];
    return 0;
  }
}