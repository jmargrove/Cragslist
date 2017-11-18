import { ImagePicker } from 'expo';

export _takeImage = async () => {
  let result = await ImagePicker.launchCameraAsync({
  });
  console.log(result);
  if (!result.cancelled) {
    this.setState({ image: result.uri });
  }
};
