const express = require('express');
 const app = express();
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 3000;
const router = require('./route/router') ;
const es = require('elasticsearch');
const cors = require('cors');
const fs = require('fs');

/*
NPM 설치 리스트

-express 
-route
 -body
 -body-parser
 -passport
 -passport-http
-request
-mysql

*/

app.use(cors());
app.use(bodyParser.json());


 app.get('/', (err, res) => { 
    fs.readFile('diagram.html', function(error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    })
 })

 app.listen(port, err => {
   if(err)   { 
      console.log("서버 가동중 오류 발생"); 
    } 
    else
    {
       console.log("서버가 가동되었습니다."); 
    } 
})

 app.use(express.json({limit: "50mb"})) 
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)
