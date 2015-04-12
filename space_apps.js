var mraa = require('mraa');
var express = require('express');
var app = express();

var digitalPin = 13;
var analogPin0 = 0;
var analogPin1 = 1;
var analogPin2= 2;


var digitalPin = new mraa.Gpio(digitalPin);
var analogPin0 = new mraa.Aio(analogPin0);
var analogPin1 = new mraa.Aio(analogPin1);
var analogPin2 = new mraa.Aio(analogPin2);

var sensor1;
var sensor2;
var sensor3;


digitalPin.dir(mraa.DIR_OUT);
setInterval(function() {
  console.log('HI');
  sensor1 = analogPin0.read();
  sensor2 = analogPin1.read();
  sensor3 = analogPin2.read();

  app.get('/sensors', function (req, res) {
    res.json({
       sensor1 : sensor1,
       sensor2 : sensor2,
       sensor3 : sensor3
    });
  });

  console.log(analogPin0.read() + "    " + analogPin1.read()+ "    " + analogPin2.read());
},500);



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
