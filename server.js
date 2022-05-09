const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://fayis:92OVSdyrrK2ItX9C@cluster0.yzdvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("Connected to mongodb")).catch("Could not connect to db")

app.use('/api/voters',require('./routes/VoterRoute'))
app.use('/api/candidates',require('./routes/CandidateRoute'))
app.use('/api/posts',require('./routes/CandidatePostRoute'))

app.listen(5001,()=>console.log("Listening to port 5001"))