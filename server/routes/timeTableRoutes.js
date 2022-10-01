import express from "express"

const router = express.Router()
import {
  addTimeTableData,
  getTimeTableData,
  deleteTimeTable,
} from "../controllers/timeTableController.js"
import { protect } from "../middlewares/authMiddleware.js"

import multer from "multer"

import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images") //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname)
  },
})

const upload = multer({ storage: fileStorageEngine })
router.post("/single", upload.single("image"), (req, res) => {
  //   console.log(req.file)
  res.send({ msg: "Single FIle upload success", url: req.file })
})

router.post("/multiple", upload.array("images", 3), (req, res) => {
  res.send("Multiple Files Upload Success")
})

router
  .route("/")
  .post(addTimeTableData)
  .get(getTimeTableData)
  .delete(deleteTimeTable)

export default router
