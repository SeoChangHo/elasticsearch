var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://localhost:9200',
  log: 'trace'
})





exports.POST = function(req, res) { 

  //연결확인
  // client.ping({
  //   requestTimeout: 1000
  // }, function(error){
  //   if(error){
  //     console.log('에러');
  //   }else{
  //     console.log('All is well')
  //     res.send('All is well')
  //   }
  // })

  req.accepts('application/json');

  // client.cluster.health({}, function(err,resp,status){
  //   console.log("-- client health --", resp);
  // })

  // create table
  // client.indices.create({
  //   index: 'gov'
  // },function(err,resp,status){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log("create",resp)
  //   }
  // })

  //delete table
  // client.indices.delete({index:'basketball'},function(err,resp,status){
  //   console.log("delete",resp);
  // })

  //insert
  // client.index({
  //   index:'zzango',
  //   id:'1',
  //   type:'constituencies',
  //   body:{
  //     "Name":"Harwich",
  //     "ID":"E1004",
  //     "Type":"Borough",
  //     "electorate":7449,
  //     "ValidVotes":4869
  //   }
  // },function(err,resp,status){
  //   console.log(resp);
  // })

  //count
  // client.count({index:'zzango', type:'constituencies'},function(err,resp,status){
  //   console.log("constituencies",resp);
  // })

  //delete row
  // client.delete({
  //   index: 'zzango',
  //   id:'1',
  //   type:'constituencies'
  // }, function(err,resp,status){
  //   console.log(resp);
  // })

  //bulk error....
  var myBody = [{index: {_index:'zzango', _type:'constituencies', _id: 1 } },
  {
    "Name":"Harwich",
    "ID":"E1004",
    "Type":"Borough"
  }]

  client.bulk({
    index:'zzango',
    type:'constituencies',
    body:myBody
  })

  //search
  // client.search({
  //   index: 'zzango',
  //   type: 'constituencies',
  //   body:{
  //     query:{
  //       match:{ "Name":"Harwich"}
  //     },
  //   }
  // },function(error, response, status){
  //   if(error){
  //     console.log("search error: " + error)
  //   }
  //   else{
  //     console.log("--- Response ---");
  //     console.log(response);
  //     console.log("--- Hits ---");
  //     response.hits.hits.forEach(function(hit){
  //       console.log(hit);
  //     })
  //   }
  //
  // })


} 
