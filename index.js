const express = require("express");
const app= express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@thesis-cluster-9doea.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

app.get('/',(req,res)=>{
    res.send('hello world!!!')
});
//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));
