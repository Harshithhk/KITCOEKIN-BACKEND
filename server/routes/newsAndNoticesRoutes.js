import express from "express"
const router = express.Router()
import {
  addNewsData,
  getNewsData,
  deleteNews,
} from "../controllers/newsController.js"
import {
  addNoticeData,
  getNoticeData,
  deleteNotice,
} from "../controllers/noticesController.js"
import { protect } from "../middlewares/authMiddleware.js"

router.route("/news").post(addNewsData).get(getNewsData).delete(deleteNews)
router
  .route("/notices")
  .post(addNoticeData)
  .get(getNoticeData)
  .delete(deleteNotice)

export default router
