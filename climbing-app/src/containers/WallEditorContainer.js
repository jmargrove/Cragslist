import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import moment from 'moment';

var AWS = require('aws-sdk');
var albumBucketName = 'my-climbing-app-1';
var bucketRegion = 'us-east-1';
var IdentityPoolId = 'us-east-1:0975d0ea-7e62-434f-8b2e-3907bc51ec6f';


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



class WallEditorComponent extends React.Component {

  createAlbum = (albumName) => {
    albumName = albumName.trim();
    if (!albumName) {
      return alert('Album names must contain at least one non-space character.');
    }
    if (albumName.indexOf('/') !== -1) {
      return alert('Album names cannot contain slashes.');
    }
    var albumKey = encodeURIComponent(albumName) + '/';
    s3.headObject({Key: albumKey}, function(err, data) {
      if (!err) {
        return alert('Album already exists.');
      }
      if (err.code !== 'NotFound') {
        return alert('There was an error creating your album: ' + err.message);
      }
      s3.putObject({Key: albumKey}, function(err, data) {
        if (err) {
          return alert('There was an error creating your album: ' + err.message);
        }
        alert('Successfully created album.');
      });
    });
  }

  createWall = (data) => {
    fetch('http://Karina-MacBookPro.local:3000/routes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  state = {
    name: '',
    path: '',
    difficulty: '',
    gym: ''
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleChange = (e, index, value) => {
    this.setState({
    [e.target.name]: e.target
    })
    console.log(e.target);
  }

  handleSubmit = (e) => {
    this.createAlbum('walls');
    this.handlePath()
    console.log("state when we SET THE ROUTE", this.state);
    this.createWall({
      name: this.state.name,
      path: this.state.path,
      difficulty: this.state.difficulty,
      gym: this.state.gym,
      date: moment()
    })
  }

  handlePath = (albumName) => {
    var files = document.getElementById('files').files;
    if (!files.length) {
      return alert('Please choose a file to upload first.');
    }
    var file = files[0];
    var fileName = file.name;
    var albumPhotosKey = encodeURIComponent(albumName) + '//';

    var photoKey = albumPhotosKey + fileName;
    s3.upload({
      Key: photoKey,
      Body: file,
      ACL: 'public-read'
    }, function(err, data) {
      if (err) {
        return alert('There was an error uploading your photo: ', err.message);
      }
      alert('Successfully uploaded photo.');
      this.handlePath(albumName);
    });
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
          hintText="Plastic tortilla"
          floatingLabelText="Choose route name"
          id="inputName"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        /><br />
        <RaisedButton
           label="Choose an Image"
           labelPosition="before"
           style={styles.button}
           containerElement="label"
           onChange={this.handlePath}
         >
           <input id="files" type="file" style={styles.exampleImageInput} />
        </RaisedButton><br />
        <SelectField
          floatingLabelText="Choose gym name"
          value={this.state.difficulty}
          onChange={this.handleChange}
          name="gym"
        >
          <MenuItem value={1} primaryText="Sharma Climbing BCN" />
          <MenuItem value={2} primaryText="Deu Dits" />
          <MenuItem value={3} primaryText="Climbat La Foixarda" />
        </SelectField> <br />
        <RaisedButton label="Set the route!" fullWidth={true} primary={true} onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default WallEditorComponent;
