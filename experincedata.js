const mongo = require('mongoose')

const experincedata = mongo.Schema(
    {
        skill:
        {
            type : String , 
            require : true  
        },
        period:
        {
            type : Number , 
            require : true  
        },
        price:
        {
            type : Number , 
            require : true  
        }
    }
)

module.exports = mongo.model("experincedata" , experincedata)