import Alumni from "../models/alumni.js"
import generateToken from '../utils/generateToken.js'

  const getAlumniProfile =async(req,res)=>{
      const {id} = req.body    
     const user = await Alumni.findById(id).select('-password')
    try{
       if(user){
      res.json(user)
     }else{
         res.status(401).json('Alumni not found')
     }
    }
    catch(err){
         res.status(500).send(err)
    }
  }

  const updateAlumni = async (req, res) => {
    try {
      const document = JSON.parse(req.body.document)
      const {_id} = document
      const imageLocation = req.file ? req.file.location : ""
      document.photoUrl = imageLocation

      // Update the alumni data in the database
      const updatedAlumni = await Alumni.findByIdAndUpdate(
        {_id:_id},
        document,
        { new: true }
      );

      res.status(200).json({ msg: "Alumni data updated",alumniData:updatedAlumni },);
    } catch (e) {
      console.log(e)
      res.status(400).json(e);
    }
  };

  const loginAlumni = async(req,res) => {
    const {email,password} = req.body    
    const alumni = await Alumni.findOne({email:email})
    
    if(alumni && (await alumni.matchPassword(password) && alumni.accountStatus == "ACTIVE")){
        delete alumni.password
        res.status(201).json({
            login:"ACTIVE",
            alumni: {
                name: alumni.name
                },
            token: generateToken(alumni._id),
        })
    }else if(alumni && (await alumni.matchPassword(password) && alumni.accountStatus == "PENDING")){
      delete alumni.password
      res.status(203).json({
          login:"PENDING",
          alumni: {
              name: alumni.name,
              email: alumni.email
              },
      })
    }else if(alumni && (await alumni.matchPassword(password) && alumni.accountStatus == "INACTIVE")){
      delete alumni.password
      res.status(400).json({
        login:"INACTIVE",
        alumni: {
            name: alumni.name,
            email: alumni.email
            },
    })
    }else {
        res.status(401).send('Invalid Credentials')
    }
}

  const registerAlumni =async(req,res) => {
    try {
    const {email} = req.body
    const alumniExists = await Alumni.findOne({email:email})
    if(!alumniExists){

        const imageLocation = req.file ? req.file.location : ""
        req.body.photoUrl = imageLocation
        const alumni = await Alumni.create(req.body)

        if(alumni){
             delete alumni['password']
            res.status(200).json({
                msg: "alumni registered",
                alumni: {
                    name: alumni.name,
                    email: alumni.email,
                    accountStatus :alumni.accountStatus
                },
                token: generateToken(alumni._id),    
            })
        }else{
            res.status(400).send('Invalid alumni data')
        }
    }else{
      if(alumniExists.accountStatus == "PENDING"){
        res.status(203).send('Account Verification Pending')
      }else if(alumniExists.accountStatus == "ACTIVE"){
        res.status(202).send('Account Already Active')
      }else if(alumniExists.accountStatus == "INACTIVE"){
        res.status(400).send('Account Inactive')
      }else{
        res.status(400).send('alumniExists')
      }
        
    }
  } catch (e) {
    res.status(400).json(e)
  }
}

  const getAlumniData = async (req, res) => {
    try {
      const alumniData = await Alumni.find({accountStatus:"ACTIVE"}).select('-password -phone -permanent_address -accountStatus')


      res.send(alumniData)
    } catch (e) {
      res.status(400).json(e)
    }
  }
  
  const deleteAlumniData = async (req, res) => {
    try {
      console.log(req.body._id)
      const deleteResp = await Alumni.findOneAndDelete({
        _id: req.body._id,
      })
      res.send({ msg: "DELETED" , deleteResp})
    } catch (e) {
      res.status(400).json(e)
    }
  }


export {registerAlumni, getAlumniData, deleteAlumniData, updateAlumni, loginAlumni, getAlumniProfile}