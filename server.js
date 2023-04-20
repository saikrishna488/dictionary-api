const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

app.use('/dict',require('./routes/dict'))
app.get('/*',(req,res)=>{
    res.status(400).json({msg:"Check your url '/dict/<word>' is correct url"});
})

app.listen(port, ()=> console.log("server started on port"+2000));

