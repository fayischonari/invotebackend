const mongoose =require('mongoose')

const CandidateListSchema =mongoose.Schema({
    Image:{
        type : String
    },
     name: {
         type:String,
        required: true,
    },
    post:{
        type:String,
        required:true,
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
     backlogs:{
         type:String,
        //  required:true
     },
     votes:{
         type:Array,
         default:[]
     }
    })
module.exports=mongoose.model('CandidateList',CandidateListSchema)