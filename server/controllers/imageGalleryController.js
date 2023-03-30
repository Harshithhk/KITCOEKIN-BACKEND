import generateToken from "../utils/generateToken.js"
import ImageGallery from "../models/imageGallery.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addImageGallery = async (req, res) => {
  try {
    console.log(req.body)
    const imageData = await ImageGallery.create(req.body)

    res.status(200).json({ msg: "image created", imageData })
  } catch (e) {
    res.status(400).json(e)
  }
}

const getImageGalleryData = async (req, res) => {
  try {
    const imageGalleryData = await ImageGallery.find()
    res.send(imageGalleryData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteImageGalleryData = async (req, res) => {
  try {
    console.log(req.body._id)
    const imageGalleryData = await ImageGallery.findOneAndDelete({
      _id: req.body._id,
    })
    res.send({ msg: "DELETED" })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addImageGallery, getImageGalleryData, deleteImageGalleryData }
