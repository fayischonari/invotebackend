const asyncHandler = require('express-async-handler')
const res = require('express/lib/response')
const { json } = require('express/lib/response')
const CandidateList = require('../models/CandidateListModel')

//get all candidates
const getAllCandidates = asyncHandler(async (req, res) => {
    try {

        const Candidate = await CandidateList.find()
        res.json(Candidate)
        console.log(Candidate);
    } catch (err) {
        res.send('Error' + err)
    }
})

const setCandidate = asyncHandler(async (req, res) => {
    const Candidate = new CandidateList({
        // Image:req.body.image,
        name: req.body.name,
        post: req.body.post,
        department: req.body.department,
        semester: req.body.semester,
        admNo: req.body.admNo,
        // backlogs: req.body.backlogs,
    })

    console.log(Candidate);
    try {
        const a1 = await Candidate.save()
        res.json(a1)
    } catch (err) {
        res.send(err.message)
    }
})

//get candidate by post
const getCandidateByPost = async (req,res)=>{
    console.log("shbdfs")
    try {
        console.log(req.params.post)
        const filteredCandidateList = await CandidateList.find({post:req.params.post})
        res.json(filteredCandidateList)
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    getAllCandidates,
    setCandidate,
    getCandidateByPost

}