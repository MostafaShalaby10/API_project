const express = require('express')
const coachdata = require('./coachdata');
const jwt = require('jsonwebtoken')
const router = express.Router();


router.get('/gettoken' , (req , res)=>
{
    jwt.sign({coachdata} , 'abcd123' ,(error , token)=>
    {
        if(error)
            res.json("There is error in gettoken")
        else
            res.json(token)    
    })
})


 router.post('/' , async (req , res) =>
{
      
    const data = new coachdata
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


 router.get('/' , async (req , res )=>
 {
     try
     {
         const x = await coachdata.find()
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
         const x = await coachdata.findById(req.params.id)
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
    const x = await coachdata.updateOne({_id : req.params.id} , 
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
    const x = await coachdata.remove({_id : req.params.id}) 
        res.json(x)
    }
    catch
    {
        res.json({Message : Error})
    }
})




module.exports=router