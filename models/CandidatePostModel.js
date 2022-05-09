const mongoose =require('mongoose')

const CandidatePostsSchema =mongoose.Schema({
     post: {
         type:String,
        required: true,
    }
})
module.exports=mongoose.model('CandidatePost',CandidatePostsSchema)