const mongoose =require('mongoose')

const VotersListSchema =mongoose.Schema({
     name: {
         type:String,
        required: true,
    },
     department:{
         type:String,
         required:true,
     },
     semester:{
         type:String,
         required:true,
     },
     admNo:{
         type:String,
         required:true,
     },
     phoneNo:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     }
    })
module.exports=mongoose.model('VotersList',VotersListSchema)