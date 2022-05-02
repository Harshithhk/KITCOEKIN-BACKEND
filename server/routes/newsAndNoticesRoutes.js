import express from "express"
const router = express.Router()
import {
  addNewsData,
  getNewsData,
  deleteNews,
  updateNews,
} from "../controllers/newsController.js"
import {
  addNoticeData,
  getNoticeData,
  deleteNotice,
  updateNotice,
} from "../controllers/noticesController.js"
import { protect } from "../middlewares/authMiddleware.js"

router
  .route("/news")
  .post(addNewsData)
  .get(getNewsData)
  .delete(deleteNews)
  .put(updateNews)
router
  .route("/notices")
  .post(addNoticeData)
  .get(getNoticeData)
  .delete(deleteNotice)
  .put(updateNotice)

export default router
