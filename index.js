var express = require('express')
var config = require('config');
var request = require('request');
var app = express();
var json_example = {
  "avatar_url" : 'https://www.brandeps.com/logo-download/B/Bitbucket-01.png',
  "embeds": [{
    "author" : {
      "name" : 'Test Author',
      "icon_url" : 'https://www.brandeps.com/logo-download/B/Bitbucket-01.png'
    },
    "title": 'Hello World!',
    "description": 'Lorem ipsum dolon',
    "type": 'rich',
    "url" : 'https://www.google.com'
  }]
};


app.get("/webhook/translator/bitbucket/to/default", function(req,res){
  var webhookUrl = config.get('discordWebhook');
  request.post(
    webhookUrl,
    { json: json_example },
    function (error, response, body) {

            console.log(body,error)

    }
  );
  res.send("ok");
})

app.get("/webhook/translator/bitbucket/to/github", function(req,res){
  res.send("github");
})

app.listen(3000, function(){
  console.log("Bot Listening on 3000");
})
