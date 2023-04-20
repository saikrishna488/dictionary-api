const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:word', async (req,res)=>{
    if(req.params.word){
        if(req.params.word == 'deekshitha'){
            res.status(200).json({meaning:"Good girl , goddess, Forgives everyone including h0"});
        }
        else{
                try{
                    let ress = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+req.params.word);
                    let data = ress.data;

                    let m = data[0].meanings[0].definitions[0].definition;
                    res.status(200).json({meaning:m});

                }
                catch(e){
                    res.status(400).json({msg:"check the word you typed"});
                }
        }
        
    }
    
});


module.exports = router
