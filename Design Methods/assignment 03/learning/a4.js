var request = require('request');
var fs = require('fs');
var d3 = require("d3");

request('http://www.gunviolencearchive.org/export-finished/download?uuid=1e1fc646-a270-420e-8b41-3f497794831f&filename=public%3A//export-620f40da-56be-4d27-a859-595f54167b3c.csv', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFileSync('db/gv.csv', body);
  }
  else {console.error('request failed')}
})