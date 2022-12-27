
const makeRequest = async function(url){
   const res = await fetch(url);
   if(!res.ok){
    const massage = `Error ${res.status}`;
    throw new Error(massage);
   }
   const data = await res.json();
   return data;
}
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