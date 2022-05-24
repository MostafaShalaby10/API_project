const jwt = require('jsonwebtoken')

const mid = (req , res , next)=>
{
    console.log("Hello from middleware")
    next()
}

module.exports=mid 
