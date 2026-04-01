const express = require('express');
const path = require('path');
const app= express();
const productRouter =  require('./router/product');
app.use(express.static('public'));
app.use(express.json());
app.use('/api/products',productRouter);


app.listen(4000,()=>{
    console.log("Server is running at port 4000");
});
app.use((req,res)=>
{
    res.status(404).send("<h1>Page not found</h1>");
});