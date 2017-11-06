var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var pg01data = [];
var pg02data = [];
var async = require('async');

request('http://www.gunviolencearchive.org/last-72-hours?page=1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('/home/ubuntu/workspace/gv/gv01.html', body);
  }
  
  else {console.error('request failed')}
  
  var contentpg01 = fs.readFileSync('/home/ubuntu/workspace/gv/gv01.html');
  var $ = cheerio.load(contentpg01);
  
  $('tbody').find('td').each(function(i, elem) {
     var pg01event = ($(elem)
     .text()
     .trim()
     .replace (/,/g,"")
      .replace (/,/g,"")
     .replace (/li class/g,"")
     .replace(/View Incident\nView Source/g, "\n")
     
  //  .split("View Source")
//    .split("View Incident\n")
    
   //  .replace(/\n/g, ",")

     );
     
      pg01data.push(pg01event);
      fs.writeFileSync('/home/ubuntu/workspace/gv/gv01.csv', (pg01data), 'utf8'); 

      
 //  console.log(pg01data);
  // console.log($(elem).text());
}



);

})