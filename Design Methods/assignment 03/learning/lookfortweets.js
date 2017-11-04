var fs = require('fs');
var Twit = require('twit');
var config = require('./config');
var tweetHold = [];

var T = new Twit(config);
//stuff above this is required


// ***look for tweets which mention #soccer
// var stream = T.stream('statuses/filter', { track: '@HillaryClinton', language: 'en' })

//var place = [ '-122.75', '36.8', '-121.75', '37.8' ]
//var place = ['35.7275390625','32.212801068','42.0556640625','36.914764289' ] //syria mostly

var place = ['-73.9684152603','40.6630939346','-73.9542531967','40.6748122065' ]
var stream = T.stream('statuses/filter', { locations: place })

stream.on('tweet', function (tweet) {
tweetHold.push(tweet);
fs.writeFileSync('tweetDB.json', JSON.stringify(tweetHold)); 


//  console.log(tweet)
})

//**look for tweets in a geo box




// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })