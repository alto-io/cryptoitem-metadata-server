var config = require("../local.db.json").config;

const serverURL = config.server_url;
const collectionName = config.collection_name;
const collectionSymbol = config.collection_symbol;

var fs = require('fs')

// script expects to be run from project directory, via "npm run"

fs.readFile("local.db.json", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/localhost:3000/g, serverURL);

  fs.writeFile("db.json", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

fs.readFile("public/index.template.html", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var result = data.replace(/server_url/g, serverURL);
  var result2 = result.replace(/col_name/g, collectionName);
  var result3 = result2.replace(/col_symbol/g, collectionSymbol);

  fs.writeFile("public/index.html", result3, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
