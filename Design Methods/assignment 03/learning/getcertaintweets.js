var fs = require('fs');
var Twit = require('twit');
var config = require('./config');
var tweetHold = [];

var T = new Twit(config);


T.get('followers/ids', { screen_name: 'heymaxbc' },  function (err, data, response) {
  console.log(data)
})

