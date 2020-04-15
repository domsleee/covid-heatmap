export function safeGet(obj, fields, defaultVal=null) {
  let myObj = obj;
  for (var field of fields) {
    if (field in myObj) {
      myObj = myObj[field];
    } else {
      return defaultVal;
    }
  }
  return myObj;
}
