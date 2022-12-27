// fetch('https://jsonplaceholder.typicode.com/post')
// .then(function(res){
//     if(!res.ok){
//       const massage = `Error : ${res.status}`;
//       throw new Error (massage)
//     }
//     return res.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })


//! post 
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body:JSON.stringify({
//         title: 'fatra',
//         body:'batra',
//         userId:1,
//     })
// })
// .then(function(res){
//     if(!res.ok){
//       const massage = `Error : ${res.status}`;
//       throw new Error (massage)
//     }
//     return res.json();
// })
// .then(function(res){
//     console.log(res);
// })
// .catch(function(err){
//     console.log(err);
// })
 

//! update
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    body:JSON.stringify({
        id:1,
        title: 'fatrabora',
        body:'batrawata',
        userId:1,
    })
})
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









