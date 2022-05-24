const express = require('express')
const router = express.Router();
const experincedata = require('./experincedata')
const jwt = require('jsonwebtoken')

router.get('/gettoken' , (req , res)=>
{
    jwt.sign({experincedata} , 'abcd123' ,(error , token)=>
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
        const x = await experincedata.find()
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
        const x = await experincedata.findById(req.params.id)
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})

router.post('/' ,async (req , res , next)=>
{
    const data = new experincedata
    ({skill : req.body.skill ,
      period : req.body.period , 
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
    const x = await experincedata.updateOne({_id : req.params.id} , 
        {$set : 
            {
                skill : req.body.skill , 
                period : req.body.period , 
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
    const x = await experincedata.remove({_id : req.params.id}) 
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})

module.exports=router