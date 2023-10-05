const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

//Import the required controller
const {
  register,
  login,
  getUserInfo
}=require("../Controller/userAuth");

//Route for register
router.post("/register", register);
//Routes for login
router.post("/login", login);
//Routes for user info
router.post("/get-user-info-by-id", authMiddleware, getUserInfo);


// router.post("/register", async (req, res) => {
//   try {
//     const userExists = await User.findOne({ email: req.body.email});

//     if(userExists){
//         return res.status(200).send({ message: "User already exists", success: false});
//     }

//     const password = req.body.password;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     req.body.password = hashedPassword;

//     const newUser = new User(req.body);
//     await newUser.save();

//     res.status(200).send({ message: "User created successfully", success: true });

//   } catch (error) {
//     res.status(500).send({message:"error creating user", success:false});
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({email: req.body.email});

//     if(!user){
//       return res.status(200).send({message:"user does not exist", success: false});
//     }

//     const isMatch = await bcrypt.compare(req.body.password, user.password);

//     if(!isMatch){
//       return res.status(200).send({message:"invalid credentials", success: false});
//     }
//     else{
//       const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
//       res.status(200).send({message:"login successful", success: true, data: token});
//     }

//   } 
//   catch (error) {
//     console.log(error);
//     res.status(500).send({message:"error loggin in", success: false, error});
//   }
// });

// router.post("/get-user-info-by-id", authMiddleware, async (req,res) => {
//   try {
//     const user = await User.findOne({_id: req.body.userId});
//     if(!user){
//       return res.status(200).send({message:"user does not exist", success: false});
//     }
//     else{
//       res.status(200).send({ success: true, data: {
//         name: user.name,
//         email: user.email,
//         seenNotifications: user.seenNotifications,
//         unseenNotifications: user.unseenNotifications,
//         isAdmin: user.isAdmin,
//         isAuthor: user.isAuthor,
//       }});
//     }
//   } 
//   catch (error) {
//     res.status(500).send({message:"error getting user info", success: false, error});
//   }
// })

 module.exports = router;
