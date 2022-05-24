const express = require('express')
const sessiondata = require('./sessiondata')
const router = express.Router();
const jwt = require('jsonwebtoken')
router.get('/gettoken' , (req , res)=>
{
    jwt.sign({sessiondata} , 'abcd123' ,(error , token)=>
    {
        if(error)
            res.json("There is error in gettoken")
        else
            res.json(token)    
    })
})
router.get('/' ,async (req , res , next)=>
{
    try
    {
        const x = await sessiondata.find()
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})

router.get('/:id' ,async (req , res , next)=>
{
    try
    {
        const x = await sessiondata.findById(req.params.id)
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})

router.post('/' ,async (req , res , next)=>
{
    const data = new sessiondata
    ({  skill : req.body.skill ,
        time : req.body.time , 
      price : req.body.price })
    try
    {
        const x = await data.save()
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})

router.put('/:id' , async (req , res , next)=>
{
    try{
    const x = await sessiondata.updateOne({_id : req.params.id} , 
        {$set : 
            {   skill : req.body.skill ,
                time : req.body.time , 
                price : req.body.price 
            }
        }) 
        
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})



router.delete('/:id' , async (req , res , next)=>
{
    try{
    const x = await sessiondata.remove({_id : req.params.id}) 
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})


module.exports=router