import generateToken from "../utils/generateToken.js"
import Notice from "../models/notices.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addNoticesData = async (req, res) => {
  const { title } = req.body
  delete req.body._id
  const existingNotice = await Notice.findOne({ title: title })

  if (existingNotice) {
    res.status(400).json("Notice of this title already exists")
  } else {
    try {
      const noticeData = await Notice.create(req.body)

      res.status(200).json({ msg: "notice created", noticeData })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const getNoticesData = async (req, res) => {
  try {
    const noticesData = await Notice.find()
    res.send(noticesData)
  } catch (e) {
    res.status(400).json(e)
  }
}
const deleteNotice = async (req, res) => {
  try {
    console.log(req.body._id)
    const noticesData = await Notice.findOneAndDelete({ _id: req.body._id })
    res.send({ msg: "DELETED" })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addNoticesData, getNoticesData, deleteNotice }
