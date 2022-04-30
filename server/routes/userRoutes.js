import express from 'express'
const router = express.Router()
import {
  register,
  login,
  getUserProfile,
  // updateUserProfile,
  // getUserName,
} from '../controllers/userController.js'
import {protect} from '../middlewares/authMiddleware.js'

router.route('/register').post(register)
router.post('/login',login)
router.route('/profile').get(protect,getUserProfile)

export default router