const express=require("express")

const app=express();
app.get("/home",function(req,res){
    res.send("Hello");
})

app.get("/books" , function(req,res){
res.send({a:"Herry Potter",b:"Fighter",c:"Soul",d:"Age"})
})
app.listen(5003,()=>{
console.log("porting");


})