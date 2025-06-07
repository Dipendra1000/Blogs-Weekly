const express = require('express')
const router = express.Router()
const User = require('../models/User')
const authenticate = require('../middleware/authenticate')

router.get("/profile", authenticate, async(req, res)=>{
    try{
        const user = await User.findById(req.user.userId).select('-password')
        res.json(user)
    }catch(err){
        res.status(500).json({message:"server error"})
    }
})

router.put("/profile", authenticate, async(req, res)=>{
    try{
        const { username, bio, avatar } = req.body; // ✅ extract from body
        const userId = req.user.userId;             // ✅ comes from token

        const updatedUser = await User.findByIdAndUpdate(
            userId, 
            {username, bio, avatar}, 
            {new: true, runValidators: true}).select("-password")
        res.json(updatedUser)
    }catch(err){
        res.status(500).json({message: "server error during profile update"})
    }
})

module.exports = router