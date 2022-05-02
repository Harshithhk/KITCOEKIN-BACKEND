import generateToken from "../utils/generateToken.js"
import News from "../models/news.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addNewsData = async (req, res) => {
  const { title } = req.body

  const existingNews = await News.findOne({ title: title })

  if (existingNews) {
    res.status(400).json("News of this title already exists")
  } else {
    try {
      const newsData = await News.create(req.body)
      res.status(200).json({ msg: "news created", newsData })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const getNewsData = async (req, res) => {
  try {
    const newsData = await News.find()
    res.send(newsData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteNews = async (req, res) => {
  try {
    const newsData = await News.findByIdAndDelete(req.body.id)
    res.send(newsData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const updateNews = async (req, res) => {
  let body = req.body
  try {
    let newsData = await News.findOne({ _id: body._id })
    newsData.title = body.title
    newsData.shortDescription = body.shortDescription
    newsData.body = body.body
    newsData.featured = body.featured
    newsData.duration = body.duration
    newsData.date = body.date
    newsData.images = body.images
    newsData.link = body.link
    newsData.save()
    res.status(200).json({ msg: "news modified", newsData })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addNewsData, getNewsData, deleteNews, updateNews }
