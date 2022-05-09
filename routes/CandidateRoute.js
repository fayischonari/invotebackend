const express = require('express')
const router=express.Router()
const {getAllCandidates,setCandidate,getCandidateByPost} =require('../controllers/CandidateController')

router.get('/',getAllCandidates)
router.post('/',setCandidate)
router.get('/:post' , getCandidateByPost)





module.exports=router