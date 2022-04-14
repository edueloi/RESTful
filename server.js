const express = require ("express");
const app = express();
const data = require ("./data.json")

app.use(express.json());

app.get("/clients", function(req, res){
    res.json(data);
});


app.get("/clients/:id", function(req, res){});
app.post("/clients", function(req, res){});
app.put("/clients/:id", function(req, res){});
app.delete("/clients/:id", function(req, res){});

http://localhost:3000/clients

a.sten, function(){
   console.log ("Server is running");
});