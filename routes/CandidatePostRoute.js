const express = require('express')
const router=express.Router()
const {setPost,getAllPosts,getCandidteByPost} =require('../controllers/CandidatePostController')

// router.get('/',getAllCandidates)
router.post('/',setPost)
router.get('/',getAllPosts)



module.exports=router