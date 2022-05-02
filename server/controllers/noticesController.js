import generateToken from "../utils/generateToken.js"
import Notice from "../models/notice.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addNoticeData = async (req, res) => {
  const { title } = req.body

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

const getNoticeData = async (req, res) => {
  try {
    const noticeData = await Notice.find()
    res.send(noticeData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteNotice = async (req, res) => {
  console.log(req)
  try {
    const noticeData = await Notice.findByIdAndDelete(req.body.id)
    res.send(noticeData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const updateNotice = async (req, res) => {
  let body = req.body
  try {
    let noticeData = await Notice.findOne({ _id: body._id })
    noticeData.title = body.title
    noticeData.shortDescription = body.shortDescription
    noticeData.body = body.body
    noticeData.featured = body.featured
    noticeData.duration = body.duration
    noticeData.date = body.date
    noticeData.images = body.images
    noticeData.link = body.link
    noticeData.save()
    res.status(200).json({ msg: "notice modified", noticeData })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addNoticeData, getNoticeData, deleteNotice, updateNotice }
