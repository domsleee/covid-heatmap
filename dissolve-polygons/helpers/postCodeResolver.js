import { safeGet, axiosInstance } from './utils';
import { BASEPATH } from './env';


// https://gist.github.com/randomecho/5020859
const AUS_POSTCODES_URL = BASEPATH + '/australian-postcodes.json';

export class PostCodeResolver {
  suburbToPostCode_ = {};

  async init() {
    const ausPostCodesData = await axiosInstance.get(AUS_POSTCODES_URL);
    for (const [postCodeStr, suburb, state] of ausPostCodesData.data) {
      state;
      this.suburbToPostCode_[suburb.toLowerCase()] = parseInt(postCodeStr);
    }
  }

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

  getSuburbFromFeature(feature) {
    return safeGet(feature, ['j', 'nsw_loca_2'], '').toLowerCase();
  }
}