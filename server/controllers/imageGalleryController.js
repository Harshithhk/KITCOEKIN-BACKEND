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

export { addImageGallery }
