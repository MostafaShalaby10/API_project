const mongo = require('mongoose')

const sessiondata = mongo.Schema(
    {
        skill:
        {
            type : String , 
            require : true  
        },
        time:
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

module.exports = mongo.model("sessiondata" , sessiondata)