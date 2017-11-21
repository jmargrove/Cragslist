// import uuid from 'uuid/v4';
// import AWS from 'aws-sdk/dist/aws-sdk-react-native';


async function uploadImageAsync(blob) {
  let apiUrl = 'http://localhost:8080/imageAWS';
  // let uriParts = uri.split('.');
  // let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append('photo', blob, 'filename.png');

  // console.log(' ');
  // console.log('======= FORM DATA');
  // console.log(formData);
  // console.log('=[END]= FORM DATA');
  // console.log(' ');

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  return fetch(apiUrl, options);
}

export default uploadImageAsync
