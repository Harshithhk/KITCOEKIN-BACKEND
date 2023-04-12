import Contact from "../models/contact.js"

// @access Public
const addContactData = async (req, res) => {
  try {
    console.log(req.body)
    const contactData = await Contact.create(req.body)

    res.status(200).json({ msg: "contact request created", contactData })
  } catch (e) {
    res.status(400).json(e)
  }
}

const getContactData = async (req, res) => {
  try {
    const contactData = await Contact.find()
    console.log(contactData)
    res.send(contactData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteContactData = async (req, res) => {
  try {
    console.log(req.body._id)
    const deleteResp = await Contact.findOneAndDelete({
      _id: req.body._id,
    })
    res.send({ msg: "DELETED", deleteResp })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addContactData, getContactData, deleteContactData }
