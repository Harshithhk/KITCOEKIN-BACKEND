import express from "express"
import {
  getEnquiryData,
  addEnquiryData,
  deleteEnquiryData,
} from "../controllers/EnquiryController.js"

const router = express.Router()

router
  .route("/")
  .get(getEnquiryData)
  .post(addEnquiryData)
  .delete(deleteEnquiryData)

export default router
