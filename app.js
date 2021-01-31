const app =require ("express")();
const Port = process.env.Port || 3000;
app.get("",(req,res)=>{
    res.send("hello world");
});
app.listen(Port,()=>{
    console.log('app up at port ${port}');
});
