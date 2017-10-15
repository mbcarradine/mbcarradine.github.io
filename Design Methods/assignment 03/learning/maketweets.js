//console.log("this works");

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config);

var stream = T.stream('user');

// stream.on('tweet', tweeted);

function tweeted()



tweetIt(); //run it once
setInterval(tweetIt, 1000*60); //run it every 60 seconds


function tweetIt() {
	var r = Math.floor(Math.random()*100);

	var tweet = { 
		status: r + ' ' + '#Bots'  +  ' ' + '#whocares'
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) { //don't really need a callback except for error handling
	if (err) {
	console.log("bad news!");
	}
	else {
	console.log("success!")
		 }
	}

}
