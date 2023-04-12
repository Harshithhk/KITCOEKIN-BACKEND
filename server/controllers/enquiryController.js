import Enquiry from "../models/enquiry.js"

// @access Public
const addEnquiryData = async (req, res) => {
  try {
    console.log(req.body)
    const contactData = await Enquiry.create(req.body)

    res.status(200).json({ msg: "enquiry request created", contactData })
  } catch (e) {
    res.status(400).json(e)
  }
}

const getEnquiryData = async (req, res) => {
  try {
    const contactData = await Enquiry.find()
    console.log(contactData)
    res.send(contactData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteEnquiryData = async (req, res) => {
  try {
    console.log(req.body._id)
    const deleteResp = await Enquiry.findOneAndDelete({
      _id: req.body._id,
    })
    res.send({ msg: "DELETED", deleteResp })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addEnquiryData, getEnquiryData, deleteEnquiryData }
