import express from "express"
import {
  getContactData,
  addContactData,
  deleteContactData,
} from "../controllers/contactController.js"

const router = express.Router()

router
  .route("/")
  .get(getContactData)
  .post(addContactData)
  .delete(deleteContactData)

export default router
