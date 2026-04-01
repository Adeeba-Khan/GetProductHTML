const onSubmitForm=(e)=>{
    e.preventDefault();
 const product = e.target.productName.value;
 const obj={
    "productName":product
 }
    console.log("Form submitted");
    axios.post("http://localhost:4000/"+"api/products",obj).then((result)=>{
console.log(result.data.value);
    });

}