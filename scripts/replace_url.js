require('dotenv').config()

var fs = require('fs')

// script expects to be run from project directory, via "npm run"

fs.readFile("local.db.json", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/localhost:3000/g, process.env.PUBLIC_URL);

  fs.writeFile("db.json", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
