import generateToken from "../utils/generateToken.js"
import TeachingStaff from "../models/teachingStaff.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addTeachingStaffData = async (req, res) => {
  try {
    const staffData = await TeachingStaff.create(req.body)

    res.status(200).json({ msg: "staff created", staffData })
  } catch (e) {
    res.status(400).json(e)
  }
}

const getTeachingStaff = async (req, res) => {
  try {
    console.log(req.query.department)
    let staffData = {}
    if (req.query.department) {
      staffData = await TeachingStaff.find({
        department: req.query.department,
      })
    } else {
      staffData = await TeachingStaff.find()
    }
    res.send(staffData)
  } catch (e) {
    res.status(400).json(e)
  }
}
const deleteTeachingStaff = async (req, res) => {
  try {
    console.log(req.body._id)
    const staffData = await TeachingStaff.findOneAndDelete({
      _id: req.body._id,
    })
    res.send({ msg: "DELETED" })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addTeachingStaffData, getTeachingStaff, deleteTeachingStaff }
