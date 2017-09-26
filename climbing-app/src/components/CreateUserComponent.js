import React from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import uuid from 'uuid/v4';
import AWS from 'aws-sdk';
var albumBucketName = 'climbing-kd';
var bucketRegion = 'eu-west-1';
var IdentityPoolId = 'eu-west-1:ffdcc2f5-641f-4ee8-8270-b4a8f508f60a';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

class CreateUserComponent extends React.Component {

  // createAlbum = (albumName) => {
  //   albumName = albumName.trim();
  //   if (!albumName) {
  //     return alert('Album names must contain at least one non-space character.');
  //   }
  //   if (albumName.indexOf('/') !== -1) {
  //     return alert('Album names cannot contain slashes.');
  //   }
  //   var albumKey = encodeURIComponent(albumName) + '/';
  //   s3.headObject({Key: albumKey}, function(err, data) {
  //     if (!err) {
  //       return alert('Album already exists.');
  //     }
  //     if (err.code !== 'NotFound') {
  //       return alert('There was an error creating your album: ' + err.message);
  //     }
  //     s3.putObject({Key: albumKey}, function(err, data) {
  //       if (err) {
  //         return alert('There was an error creating your album: ' + err.message);
  //       }
  //       alert('Successfully created album.');
  //     });
  //   });
  // }

  createUser = (data) => {
    fetch('http://Karina-MacBookPro.local:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  state = {
    username: '',
    password: '',
    category: '',
    avatar: ''
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    // this.createAlbum('users');
    console.log("we created user", this.state);
    if (!this.state.avatar) {
      this.state.avatar = 'http://4sport.ua/_upl/2/1418/1_1417552431.jpg'
    }
    this.createUser({
      username: this.state.username,
      password: this.state.password,
      category: this.state.category,
      avatar: this.state.avatar
    })
    this.setState({
      username: '',
      password: '',
      category: '',
      avatar: ''
    })
  }

  handleCategoryChange = (e, index, value) => {
    this.setState({
      "category": value
    })
    console.log(value);
  }

  handlePath = (event) => {
    let location;
    var files = event.target.files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    }
    var file = files[0];
    var fileName = uuid();
    var albumPhotosKey = 'users/';
    var photoKey = albumPhotosKey + fileName;
    console.log({
      photoKey,
      file,
    });
    s3.upload({
      Key: photoKey,
      Body: file,
      ACL: 'public-read'
    }, (err, data) => {
      if (err) {
        console.log(err);
        return console.error('There was an error uploading your photo: ', err.message);
      }
      console.log('Successfully uploaded photo.', data.Location, this.state);
      this.setState({
        "avatar": data.Location
      });
  })

}

  render () {
    const styles = {
      button: {
        margin: 12,
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
    };
    return (
      <div>
        <TextField
          hintText="Username"
          floatingLabelText="Choose username"
          id="inputName"
          name="username"
          value={this.state.username}
          onChange={this.handleChanges}
          required
        /><br />
        <RaisedButton
           label="Choose an Image"
           labelPosition="before"
           style={styles.button}
           containerElement="label"
          //  onCh``ange={this.handlePath}
        >
          <input
            id="files"
            type="file"
            ref="image"
            style={styles.exampleImageInput}
            onChange={this.handlePath}
          />
        </RaisedButton>
        <br />
        <TextField
          hintText="Password"
          floatingLabelText="Choose password"
          id="inputName"
          name="password"
          value={this.state.password}
          onChange={this.handleChanges}
        /><br />
        <SelectField
          floatingLabelText="Choose your level"
          value={this.state.category}
          onChange={this.handleCategoryChange}
          name="category"
        >
          <MenuItem value={"6a"} primaryText="6a" />
          <MenuItem value={"7a"} primaryText="7a" />
          <MenuItem value={"8a"} primaryText="8a" />
        </SelectField>
        <RaisedButton label="Create User!" fullWidth={true} primary={true} onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default CreateUserComponent;
