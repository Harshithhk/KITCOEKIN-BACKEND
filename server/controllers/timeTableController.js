import generateToken from "../utils/generateToken.js"
import TimeTable from "../models/timeTable.js"

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addTimeTableData = async (req, res) => {
  const { title } = req.body
  delete req.body._id
  const existingEvent = await TimeTable.findOne({ title: title })

  if (existingEvent) {
    res.status(400).json("Event of this title already exists")
  } else {
    try {
      const eventData = await TimeTable.create(req.body)

      res.status(200).json({ msg: "event created", eventData })
    } catch (e) {
      res.status(400).json(e)
    }
  }
}

const getTimeTableData = async (req, res) => {
  try {
    const eventsData = await TimeTable.find()
    console.log(eventsData)
    res.send(eventsData)
  } catch (e) {
    res.status(400).json(e)
  }
}

const deleteTimeTable = async (req, res) => {
  try {
    console.log(req.body._id)
    const eventsData = await TimeTable.findOneAndDelete({ _id: req.body._id })
    res.send({ msg: "DELETED" })
  } catch (e) {
    res.status(400).json(e)
  }
}

export { addTimeTableData, getTimeTableData, deleteTimeTable }
