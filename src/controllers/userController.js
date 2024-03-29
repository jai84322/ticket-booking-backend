const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')




const createUser = async function(req, res) {

    
    try {
        // res.setHeader('Access-Control-Allow-Origin','*')
        
    let data = req.body;
    let savedUser = await userModel.create(data)
    return res.status(201).send({status:true, data: savedUser})

   } catch (err) {
    console.log(err)
    return res.status(500).send({status: false, message : err.message})
   }

}





const loginUser = async function (req, res) {
    try {
        // res.setHeader('Access-Control-Allow-Origin','*')
        let { email, password } = req.body;

        let user = await userModel.findOne({ email: email, password: password });
        if (!user) {
            return res.status(400).send({ status: false, msg: "email or password is incorrect " })
        }

        let token = jwt.sign(
            {
                authorId: user._id.toString(),
                batch: "radon",
                organisation: "functionUp"
            },
            "WaJaiDhi-radon",
            {expiresIn:"72h"}
        )

        res.setHeader("x-api-key", token)
        
        return res.status(200).send({ status: true, data: token, msg: "you are successfully loggedin" })
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


const getUser = async function(req,res) {
    try {

        let userId = req.params.id
        let getData = await userModel.findById(userId)
        return res.status(200).send({status:true, data : getData})

    } catch(err) {
        console.log(err);
        return res.status(500).send({status:false, message: err.message})
    }
}

const updateUser = async function(req,res) {

    try{
        let userId = req.params.id
        let data = req.body
        let updatedUser = await userModel.findOneAndUpdate({_id : userId}, data, {new : true})
        return res.status(200).send({status:true, data : updatedUser})

    } catch (err) {
        console.log(err);
        return res.status(500).send({status:false, message : err.message})
    }
} 

const deleteUser = async function(req,res) {
    try{
        let userId = req.params.id
        let userDelete = await userModel.findOneAndUpdate({_id : userId}, {isDeleted : true}, {new : true})
        return res.status(200).send({status:true, message : "your account has been deleted successfully"})

    } catch(err) {
        console.log(err);
        return res.status(500).send({status: false, message : err.message})
    }
}


module.exports = {createUser, loginUser, getUser, updateUser, deleteUser }