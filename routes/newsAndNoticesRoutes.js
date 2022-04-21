import express from 'express'
const router = express.Router()
import {
  addNewsData, getNewsData,
} from '../controllers/newsController.js'
import {
  addNoticeData, getNoticeData,
} from '../controllers/noticesController.js'
import {protect} from '../middlewares/authMiddleware.js'

router.route('/news').post(addNewsData).get(getNewsData)
router.route('/notices').post(addNoticeData).get(getNoticeData)

export default router