import express from "express"
const router = express.Router()
import {
  addNewsData,
  getNewsData,
  deleteNews,
  updateNews,
} from "../controllers/newsController.js"
import {
  addEventData,
  getEventData,
  deleteEvent,
  updateEvent,
} from "../controllers/eventsController.js"
import { protect } from "../middlewares/authMiddleware.js"

router
  .route("/news")
  .post(addNewsData)
  .get(getNewsData)
  .delete(deleteNews)
  .put(updateNews)
router
  .route("/events")
  .post(addEventData)
  .get(getEventData)
  .delete(deleteEvent)
  .put(updateEvent)

export default router
