const express = require('express');
const route = require('./Routes/Route');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type', 'Authorization']
}))

app.use(route)

app.listen(8080,()=>{
console.log("Server is running on port http://localhost:8080");
})