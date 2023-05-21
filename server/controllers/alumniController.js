import Alumni from "../models/alumni.js"


const updateAlumni = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you pass the alumni ID in the request URL
    const { name, email, batch } = req.body; // Assuming you want to update name, email, and batch

    // Update the alumni data in the database
    const updatedAlumni = await Alumni.findByIdAndUpdate(
      id,
      { name, email, batch },
      { new: true }
    );

    res.status(200).json({ msg: "Alumni data updated", alumniData: updatedAlumni });
  } catch (e) {
    res.status(400).json(e);
  }
};

// @access Public
const addAlumni = async (req, res) => {
    try {
      
      // console.log(req.body)
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


export {addAlumni, getAlumniData, deleteAlumniData, updateAlumni}