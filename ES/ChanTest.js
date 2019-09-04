var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://localhost:9200',
  log: 'trace'
})





exports.POST = function(req, res) { 

  req.accepts('application/json');

  //연결확인
  client.ping({
    requestTimeout: 1000
  }, function(error){
    if(error){
      console.log('에러');
    }else{
      console.log('All is well')
      res.send('All is well')
    }
  })

} 
