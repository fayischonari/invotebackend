const asyncHandler = require('express-async-handler');
const { json } = require('express/lib/response');
const CandidatePost = require('../models/CandidatePostModel');
const CandidateList = require('../models/CandidateListModel')
const { post } = require('../routes/VoterRoute');


const setPost = asyncHandler(async (req, res) => {
    const post = new CandidatePost({
        post: req.body.post,
    })
    try {
        const a1 = await post.save()
        res.json(a1)

    } catch (err) {
        res.send(err.message)
    }
})



const getAllPosts = asyncHandler(async (req, res) => {
    try {
        const posts = await CandidatePost.find()
        res.json(posts)
    } catch (err) {
        res.send('Error' + err)
    }
})


module.exports = {
    
    setPost,
    getAllPosts,

}