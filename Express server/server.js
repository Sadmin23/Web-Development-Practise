//jshint esversion:6

const express = require("express");
const app = express();

app.get("/",function(request, response){
    response.send("<h1>Hello World!</h1>");
})

app.get("/contact",function(request, response){
    response.send("contact me at mdsadmintahmid-2019317818@cs.du.ac.bd");
})

app.get("/about", function(request, response){
    response.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
})

app.get("/hobbies", function(request, response){
    response.send("Integer vel varius lectus.");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});