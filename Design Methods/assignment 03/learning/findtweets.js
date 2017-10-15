//console.log("this works");

var Twit = require('twit');

var config = require('./config');
console.log(config);
var T = new Twit(config);

var params = {
q: 'Carradine',
count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses; //the "statuses" object contains the tweet text
	for (var i=0; i < tweets.length; i++){ //getting the text
console.log(tweets[i].text); //console logging it
}

}


