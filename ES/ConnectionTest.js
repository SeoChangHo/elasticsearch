var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'http://192.168.1.183:9200',
  log: 'trace'
})


exports.POST = function(req, res) { 

  req.accepts('application/json');


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

  // client.cluster.health({}, function(err,resp,status){
  //   console.log("-- client health --", resp);
  // })



  //delete table
  // client.indices.delete({index:'documents_event'},function(err,resp,status){
  //   console.log("delete",resp);
  // })

  //create table
  // client.indices.create({
  //   index: 'zzango'
  // },function(err,resp,status){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log("create",resp)
  //   }
  // })



  //insert
  // client.index({
  //   index:'zzango',
  //   type:'items',
  //   body:{ name: '이름',
  //     age: '나이',
  //     hobbyList: [ { hobby: '프로그래밍' }, { hobby: '기타' }, { hobby: '음악' } ],
  //     licenseList:
  //      [ { issue_no: '1847-38409-2399',
  //          license_nm: '내 자격증',
  //          level: '9급 마스터' },
  //        { issue_no: '1847-38409-1111',
  //          license_nm: '내가 부여한 요리사 자격증',
  //          level: '7급 마스터' } ] }
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
  //   id:'zQkoBG0BjFZGP-Hk9gWH',
  //   type:'_doc'
  // }, function(err,resp,status){
  //   console.log(resp);
  // })




  //bulk error....
  // var myBody = { index : { _index : 'zzango', _type : 'items' } }
  // {firstname : 'first_name1', lastname : 'last_name1'}
  // { index : { _index : 'zzango', _type : 'items' } }
  // {firstname : 'first_name2',lastname : 'last_name2'}
  // { index : { _index : 'zzango', _type : 'items' } }
  // {firstname : 'first_name3',lastname : 'last_name3'}
  //
  // client.bulk({
  //   index:'zzango',
  //   type:'items',
  //   body:myBody
  // });



  //search
  // client.search({
  //   index: 'documents_variable',
  //   type: '_doc',
  //   body:{
  //     query: {
  //       match: {
  //         "user_id":1
  //       }
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
