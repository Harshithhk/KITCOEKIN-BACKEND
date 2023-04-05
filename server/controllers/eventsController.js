import generateToken from "../utils/generateToken.js"
import Event from "../models/events.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addEventData = async (req, res) => {
  const { title } = req.body

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

const getEventData = async (req, res) => {
  try {
    const eventData = await Event.find()
    res.send(eventData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteEvent = async (req, res) => {
  console.log(req)
  try {
    const eventData = await Event.findByIdAndDelete(req.body.id)
    res.send(eventData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const updateEvent = async (req, res) => {
  let body = req.body
  try {
    let eventData = await Event.findOne({ _id: body._id })
    eventData.title = body.title
    eventData.shortDescription = body.shortDescription
    eventData.body = body.body
    eventData.featured = body.featured
    eventData.duration = body.duration
    eventData.date = body.date
    eventData.images = body.images
    eventData.link = body.link
    eventData.save()
    res.status(200).json({ msg: "event modified", eventData })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addEventData, getEventData, deleteEvent, updateEvent }
