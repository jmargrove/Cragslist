// import uuid from 'uuid/v4';
// import AWS from 'aws-sdk/dist/aws-sdk-react-native';


async function uploadImageAsync(uri) {
    let apiUrl = 'https://localhost:8080/imageAWS';
    let formData = new FormData();
    console.log(uri)
    formData.append('photo', {
      uri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });
    console.log("formData", formData)
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    return fetch(apiUrl, options).catch(e => console.log(e));
  }

export default uploadImageAsync
