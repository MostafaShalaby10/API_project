const mongo = require('mongoose')

const learnerdata = mongo.Schema(
    {
        name:
        {
            type : String , 
            require : true  
        },
        age:
        {
            type : Number , 
            require : true  
        },
        gender:
        {
            type : String , 
            require : true  
        },
        skill:
        {
            type : String , 
            require : true  
        }
    }
)

module.exports = mongo.model("learnerdata" , learnerdata)