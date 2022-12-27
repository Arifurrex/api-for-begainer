fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(res){
    console.log(res.json());
})
.then(function(res){
    console.log(res);
})
