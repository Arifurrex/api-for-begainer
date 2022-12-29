/* 
4 WAY  to call api -XMLHttpRequest , fetch,axios,jquery
fetch() has replace XMLHttpRequest
fetch() - global method for making HTTP request
2 way to call  -than, async await

+ fetch() is easy to use comapre to XMLHttpRequest
+ fetch() returns a promise
- returned promise can only handle network error
- does not support all the older browser

*/

/* 
fetch er maddome api call kora very easy .
fetch() লিখব  
fetch() method e argument হিসাবে  url dibo.
url er sate aro argument dite parbo

fetch() method e url dewar por amra .then() method টা দেব 
then এর ভেতর যে response টা আসবে টা আমরা console। log করে dekbo 
*/

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

// !PATCH FOR UPDATE SINGLE DATA 
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     body:JSON.stringify({
//         title: 'fatraborayala',
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

// //! delete
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });





