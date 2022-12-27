
const makeRequest = async function(url,config){
   const res = await fetch(url,config);
   if(!res.ok){
    const massage = `Error ${res.status}`;
    throw new Error(massage);
   }
   const data = await res.json();
   return data;
}
// getdata 
const getData = function(){
    makeRequest('https://jsonplaceholder.typicode.com/posts')
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
}
getData();

//!post data
const postData = function(){
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
}
postData();