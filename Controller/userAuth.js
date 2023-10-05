const User=require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const authMiddleware=require("../middlewares/authMiddleware")

//function for register as a new user
exports.register= async (req,res)=>{
    try {
            const userExists = await User.findOne({ email: req.body.email});
        
            if(userExists){
                return res.status(200).send({ message: "User already exists", success: false});
            }
        
            const password = req.body.password;
            const fullName=req.body.name;
            const email=req.body.email;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            // req.body.password = hashedPassword;
        
            // const newUser = new User(req.body);
            // await newUser.save();
             console.log(hashedPassword);
          
            const user=await User.create({
              name:fullName,
              password:hashedPassword,
              email:email,
            });
            console.log(user);
        
            res.status(200).send({ message: "User created successfully", success: true });
        } 
    catch (error) 
    {
        res.status(500).send({message:"error creating user", success:false});
    }
};

//login
exports.login=async(req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
    
        if(!user){
          return res.status(200).send({message:"user does not exist", success: false});
        }
    
        const isMatch = await bcrypt.compare(req.body.password, user.password);
    
        if(!isMatch){
          return res.status(200).send({message:"invalid credentials", success: false});
        }
        else{
          const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
          res.status(200).send({message:"login successful", success: true, data: token});
        }
    
    } 

    catch (error) 
      {
        console.log(error);
        res.status(500).send({message:"error loggin in", success: false, error});
     }
};

//get user info

exports.getUserInfo=async(req,res)=>{
    try {
        const user = await User.findOne({_id: req.body.userId});
        if(!user){
          return res.status(200).send({message:"user does not exist", success: false});
        }
        else{
          res.status(200).send({ success: true, data: {
            name: user.name,
            email: user.email,
            seenNotifications: user.seenNotifications,
            unseenNotifications: user.unseenNotifications,
            isAdmin: user.isAdmin,
            isAuthor: user.isAuthor,
          }});
        }
      } 
      catch (error) {
        res.status(500).send({message:"error getting user info", success: false, error});
      }
};