import generateToken from "../utils/generateToken.js"
import Event from "../models/events.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addEventsData = async (req, res) => {
  const { title } = req.body
  delete req.body._id
  const existingEvent = await Event.findOne({ title: title })

  if (existingEvent) {
    res.status(400).json("Event of this title already exists")
  } else {
    try {
      const eventData = await Event.create(req.body)

      res.status(200).json({ msg: "event created", eventData })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const getEventsData = async (req, res) => {
  try {
    const eventsData = await Event.find()
    res.send(eventsData)
  } catch (e) {
    res.status(400).json(e)
  }
}
const deleteEvent = async (req, res) => {
  try {
    console.log(req.body._id)
    const eventsData = await Event.findOneAndDelete({ _id: req.body._id })
    res.send({ msg: "DELETED" })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addEventsData, getEventsData, deleteEvent }
