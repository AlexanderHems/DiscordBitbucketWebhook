var express = require('express')
var config = require('config');
var request = require('request');
var app = express();



app.get("/webhook/translator/bitbucket/to/default", function(req,res){
  var webhookUrl = config.get('discordWebhook');
  request.post(
    webhookUrl,
    { json: { content: 'HELLO WORLD!' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
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
