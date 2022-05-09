const asyncHandler = require('express-async-handler')
const { json } = require('express/lib/response')
const VotersList = require('../models/VotersListModel')

const getAllVoters = asyncHandler(async (req, res) => {
    try {
        const voters = await VotersList.find()
        res.json(voters)
    } catch (err) {
        res.send('Error' + err)
    }
})


const setVoter = asyncHandler(async (req, res) => {
    const voter = new VotersList({
        name: req.body.name,
        department:req.body.department,
        semester:req.body.semester,
        admNo:req.body.admNo,
        phoneNo:req.body.phoneNo,
        email:req.body.email
    })
    try {
        const a1 = await voter.save()
        res.json(a1)

    } catch (err) {
        res.send(err.message)
    }


})

module.exports = {
    getAllVoters,
    setVoter
}