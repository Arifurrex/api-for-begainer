fetch('https://jsonplaceholder.typicode.com/post')
.then(function(res){
    if(!res.ok){
      const massage = `Error : ${res.status}`;
      throw new Error (massage)
    }
    return res.json();
})
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
})