import Alumni from "../models/alumni.js"


// @access Public
const addAlumni = async (req, res) => {
    try {
      console.log(req.body)
      const imageLocation = req.file ? req.file.location : null
      const alumniData = await Alumni.create(req.body)
      alumniData.photoUrl = imageLocation
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