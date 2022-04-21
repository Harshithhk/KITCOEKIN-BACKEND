import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js' 

// @desc     Auth user & get token
// @route    POST /api/users/login
// @access   Public
const login = async(req,res) => {
    const {name,password} = req.body
    console.log(req.body)
    
    const user = await User.findOne({name:name})
    
    if(user && (await user.matchPassword(password))){
        delete user.password
        res.json({
            login:"success",
            user: {
                name: user.name
                },
            token: generateToken(user._id),
        })
    } else {
        res.status(401).send('Invalid Credentials')
    }
}


// @desc     Register a new user
// @route    POST /api/users
// @access   Public
const register =async(req,res) => {
    const {name,password} = req.body
    
    const userExists = await User.findOne({name:name})

    if(!userExists){

        const user = await User.create({name,password})

        if(user){
             delete user['password']
            res.json({
                user: {
                    name: user.name,
                },
                token: generateToken(user._id),    
            })
        }else{
            res.status(400).send('Invalid user data')
        }
    }else{
        res.status(400).send('UserExists')
    }
}



// @desc     GET user profile
// @route    GET /api/users/profile
// @access   Private
const getUserProfile =async(req,res)=>{
    
//    const user = await User.findById(req.user._id).select('-password')
   if(req.user){
    res.json(req.user)
   }else{
       res.status(404)
       throw new Error('User not found')
   }
}


// @desc     Update user profile
// @route    PUT /api/users/profile
// @access   Private
const updateUserProfile = async(req,res) => {
    
    
   
//    console.log(`USER OF REPLY ${userOfReply}`)
   
   const user = await User.findById(req.user._id)

   if(user){

        // UPDATING USER
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        
        const updatedUser = await user.save()

        res.json({
            name : updatedUser.name,
            email : updatedUser.email,
        })

   }else{
       res.status(404)
       throw new Error('User not found')
   }
}



export{login,register,getUserProfile,updateUserProfile}