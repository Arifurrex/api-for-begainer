
const makeRequest = async function(){
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   if(!res.ok){
    const massage = `Error ${res.status}`;
    throw new Error(massage);
   }
   const data = await res.json();
   return data;
}
const getData = function(){
    makeRequest()
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
}
getData();