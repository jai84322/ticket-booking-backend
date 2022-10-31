const express = require("express")
const router = express.Router()
const {createUser, getUser, updateUser, deleteUser } = require('../controllers/userController')

// users routes
router.post('/createUser', createUser)
router.get('/getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)

// hotels routes



// rooms routes


module.exports = router;