
async function uploadImageAsync(blob, name) {
  const apiUrl = 'http://192.168.0.36:8080/imageAWS';
  const formData = new FormData();
  formData.append(name, blob, 'filename.png');
  const options = {
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
