import { safeGet } from './utils';
const fs = require('fs');
const path = require('path');

// https://gist.github.com/randomecho/5020859
const AUS_POSTCODES_URL = path.join(process.cwd(), '/external/australian-postcodes.json');

export class PostCodeResolver {
  suburbToPostCode_ = {};

  async init() {
    const ausPostCodesData = fs.readFileSync(AUS_POSTCODES_URL);
    for (const [postCodeStr, suburb, state] of JSON.parse(ausPostCodesData)) {
      state;
      this.suburbToPostCode_[suburb.toLowerCase()] = parseInt(postCodeStr);
    }
  }

  getSuburbFromFeature(feature) {
    return safeGet(feature, ['j', 'nsw_loca_2'], '').toLowerCase();
  }

  // note: unused
  getPostCodeFromFeature(feature) {  
    const suburb = safeGet(feature, ['j', 'nsw_loca_2'], '').toLowerCase();
    const locPid = safeGet(feature, ['j', 'loc_pid']);

    if (suburb && suburb in this.suburbToPostCode_) {
      return this.suburbToPostCode_[suburb];
    }
    if (locPid) {
      const postCode = parseInt(locPid.replace('NSW', ''));
      if (postCode == 2794) {
        console.log("here", feature);
        console.log(JSON.stringify(feature.j));
      }
      return postCode;
    }
    return -1;
  }
}