var express=require('express');
console.log(express);
var app=express();
app.listen(8000);
app.use(express.static('node_modules'));

// app.get('/', function(request, response){
//     console.log("Hello World");
//   });

app.use(express.static('public'));
app.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
});
app.get('/anotherRoute', function(request, response){
    response.send("Hey, I'm another route!");
});

app.get('/me',function (request,response)
{
//response.send({name:"Kobi", like: "choclate cakes"});
    response.send("hi");
})
;

