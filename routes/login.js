const express = require('express')

const {registerView, loginView} = require('../controller/loginController')

const router = express.Router()

router.get('/register',registerView)
router.get('/login',loginView)

module.exports = router