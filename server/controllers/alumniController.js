import Alumni from "../models/alumni.js"


// @access Public
const addAlumni = async (req, res) => {
  let oldObject = await Alumni.find(req.body.email)
  if(oldObject){
    try {
      
      const imageLocation = req.file ? req.file.location : null
      req.body.photoUrl = imageLocation
      const alumniData = await Alumni.updateOne({ _id:oldObject.id }, { $set: req.body })
      
      res.status(200).json({ msg: "alumni created", alumniData })
    } catch (e) {
      res.status(400).json(e)
    }
  }
    try {
      
      console.log(req.body)
      const imageLocation = req.file ? req.file.location : null
      req.body.photoUrl = imageLocation
      const alumniData = await Alumni.create(req.body)
      
      res.status(200).json({ msg: "alumni created", alumniData })
    } catch (e) {
      res.status(400).json(e)
    }
  }

  const getAlumniData = async (req, res) => {
    try {
      const alumniData = await Alumni.find()
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


export {addAlumni, getAlumniData, deleteAlumniData}