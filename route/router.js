const express = require('express');
 const route = express.Router(); 

const ConnectionTest = require('../ES/ConnectionTest'); 
route.route('/ConnectionTest')
  .post(ConnectionTest.POST);  

const JsonLoad = require('../ES/JsonLoad'); 
route.route('/JsonLoad')
  .post(JsonLoad.POST);  

const ChanTest = require('../ES/ChanTest'); 
route.route('/ChanTest')
  .post(ChanTest.POST);  

module.exports = route; 
