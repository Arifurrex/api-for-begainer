
// event - onload(), onerror()
//property- response, responseType ,
//function -  open() ,send() ,setRequestHeader()

const makeRequest = function(method,url,data1){
   const xhr = new XMLHttpRequest();
   xhr.open(method,url);
   xhr.setRequestHeader('Content-type','application/json');
   xhr.onload = function(){
      let data = xhr.response;
      console.log(JSON.parse(data));
   };
   xhr.onerror = function(){
      console.log('error is here');
   }
   xhr.send(JSON.stringify(data1));  
}

//get data
const getData = function(){
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}
//post
const postData = function(){
   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
   });
}
//update 
const updateData = function(){
   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
      id:1,
      title: 'foota',
      body: 'barto',
      userId: 1,
   });
}

// single data update
const updateSingleData = function(){
   makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/2',{
      title: 'foowa',
   });
}

// delete 
// single data update
const deleteData = function(){
   makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
}

deleteData();