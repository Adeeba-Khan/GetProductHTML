const express = require('express');
const path = require('path');
const app= express();

app.get('/api/products',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','products.html'));

});
app.listen(4000,()=>{
    console.log("Server is running at port 4000");
});
app.use((req,res)=>
{
    res.status(404).send("<h1>Page not found</h1>");
});