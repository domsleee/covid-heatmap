const csvtojsonV2 = require("csvtojson/v2");
import { BASEPATH } from './env';
import { axiosInstance } from './utils';

// https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location

const URL = BASEPATH + '/external/cases-by-postcode.csv';
//const ACT_URL = 'https://data.nsw.gov.au/data/datastore/dump/21304414-1ff1-4243-a5d2-f52778048b29?bom=True';
//const JSON_URL = 'https://data.nsw.gov.au/data/api/3/action/package_show?id=aefcde60-3b0c-4bc0-9af1-6fe652944ec2';

export class PostCodeData {
  postCodeMap_ = {};
  suburbToPostCode_ = {};

  async init() {
    const postCodeDataCsv = await axiosInstance.get(URL);
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