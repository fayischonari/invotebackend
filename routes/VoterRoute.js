const express = require('express')
const router=express.Router()
const {getAllVoters , setVoter} =require('../controllers/VotersController')

router.get('/',getAllVoters)
router.post('/',setVoter)

module.exports=router