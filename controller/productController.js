const path = require(`path`);
const getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,`..`,'views','products.html'));

}
const postProducts =(req,res)=>{

    // console.log(req.body.productName);
    res.json({value:req.body.productName});
}

module.exports= {getProduct,postProducts};