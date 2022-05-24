const express = require('express');
const learnerdata = require('./learnerdata');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.get('/gettoken' , (req , res)=>
{
    jwt.sign({learnerdata} , 'abcd123' ,(error , token)=>
    {
        if(error)
            res.json("There is error in gettoken")
        else
            res.json(token)    
    })
})
router.post('/' , async (req , res) =>
{
    const data = new learnerdata
    ({ name : req.body.name , 
       age : req.body.age ,
       gender : req.body.gender , 
       skill : req.body.skill })
    try
    {
            const x  =await data.save()
            res.json(x)
    }
    catch
    {
        res.json({Message : "Error"})
    }

})

 router.get('/' , async (req , res , next)=>
 {
     try
     {
         const x = await learnerdata.find()
         res.json(x)
     }
     catch
     {
        res.json({Message : "Error"})
     }
})

router.get('/:id' , async (req , res , next)=>
 {
     try
     {
         const x = await learnerdata.findById(req.params.id)
         res.json(x)
     }
     catch
     {
        res.json({Message : "Error"})
     }
})

router.put('/:id' , async (req , res , next)=>
{
    try{
    const x = await learnerdata.updateOne({_id : req.params.id} , 
        {$set : 
            {
                name : req.body.name , 
                age : req.body.age , 
                gender : req.body.gender , 
                skill : req.body.skill
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
    const x = await learnerdata.remove({_id : req.params.id}) 
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})
module.exports=router