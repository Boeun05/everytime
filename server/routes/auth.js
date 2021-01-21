const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");

//=================================
//             Auth
//=================================

router.get('/', auth , (req, res) => {
    res.status(200).json({   
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        id: req.user.id,
        password: req.user.password,
        email: req.user.email,
        nickname: req.user.nickname,
        entranceYear: req.user.entranceYear,
        school: req.user.school,
        role: req.user.role
    })
})

module.exports = router;