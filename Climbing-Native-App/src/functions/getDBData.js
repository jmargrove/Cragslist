// on init get the data from the mongo DB
async function getDBData() {
  const apiUrl = 'http://192.168.0.36:8080/getDBData';
  return fetch(apiUrl);
}

export default getDBData
