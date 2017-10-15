var fs = require('fs');
var Twit = require('twit');
var config = require('./config');
var tweetHold = [];

var T = new Twit(config);
//stuff above this is required


// ***look for tweets which mention #soccer
var stream = T.stream('statuses/filter', { track: '@HillaryClinton', language: 'en' })

stream.on('tweet', function (tweet) {
tweetHold.push(tweet);
fs.writeFileSync('tweetDB.json', JSON.stringify(tweetHold)); 


//  console.log(tweet)
})

//**look for tweets in a geo box


// var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

// var stream = T.stream('statuses/filter', { locations: sanFrancisco })

// stream.on('tweet', function (tweet) {
//   console.log(tweet)
// })