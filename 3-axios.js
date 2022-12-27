// axios is a js library
//its helps make request from browser (plain js/vue/react/angular,node js)
// bydefault brower a thake na 
//   

//very easy to use
// it return promise 
// throws error brilliantly
// no need to set header cause axios is intelligent



// axios(config)
// axios.get(url, [config])
// axios.post(url [,config])
// axios.put(url [,config])
// axios.patch(url [,config])
// axios.delete(url [,config])

// axios returns response object - data,status, statusText, headers, config

console.clear();
console.log(window);
// now we can find the axios in window

// axios
// .get("https://jsonplaceholder.typicode.com/posts")
// .then(function(res){
//     console.log(res.data);
// })
// .catch(function(err){
//     console.log(err);
// })


//! post 
// axios
// .post("https://jsonplaceholder.typicode.com/posts",{
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
// })
// .then(function(res){
//     console.log(res.data);
// })
// .catch(function(err){
//     console.log(err);
// })

//! put 

// axios
// .put("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PUT',
//     body: JSON.stringify({
//       title: 'fooMS',
//       body: 'barJS',
//       userId: 1,
//     }),
// })
// .then(function(res){
//     console.log(res.data);
// })
// .catch(function(err){
//     console.log(err);
// })


//patch
// axios
// .patch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'fooMSaa'
//     }),
// })
// .then(function(res){
//     console.log(res.data);
// })
// .catch(function(err){
//     console.log(err);
// })




// ! delete

axios
.delete("https://jsonplaceholder.typicode.com/posts/1")
.then(function(res){
    console.log(res.data);
})
.catch(function(err){
    console.log(err);
})




























