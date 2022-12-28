// const makeRequest = async function(config){
//     return await axios(config)
// }

// const getData = function(){
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then(function(res){
//         console.log(res.data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }

// getData()
//! post 
const makeRequest = async function(config){
    return await axios(config)
};

const postData = function(){
    makeRequest({
    url:"https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
    title: 'foowala',
    body: 'barwala',
    userId: 1,
  }),
    })
    .then(function(res){
        console.log(res);
        console.log(res.data);

    })
    .catch(function(err){
        console.log(err);
    })
}

postData()

//!update
const updateData = function(){
    makeRequest({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
    id:1,    
    title: 'foowalare',
    body: 'barwalaea',
    userId: 1,
  }),
    })
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(err){
        console.log(err);
    })
}

updateData()

//! delete
const deleteData = function(){
    makeRequest({
    url:"https://jsonplaceholder.typicode.com/posts/1",
    method: "delete"
    })
    .then(function(res){
        console.log(res.data);
    })
    .catch(function(err){
        console.log(err);
    })
}

deleteData()





















