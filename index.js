const express = require('express')
const mongo = require('mongoose')
const bodyparser = require('body-parser')
const mid = require('./middleware')
require('dotenv/config')

mongo.connect(process.env.url , ()=>
{
    console.log("Connect succesffully to database")
})

const app = express();
app.use(bodyparser.json())
app.use(mid)

app.use('/learner' , require('./learner'))
app.use('/coach' , require('./coach'))
app.use('/experince' , require('./experince'))

app.use('/session' , require('./session'))
app.listen(8989 , ()=>
{
    console.log("Server Running.........")
})

