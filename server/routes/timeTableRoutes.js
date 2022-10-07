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

// Multer Config
import multerS3 from "multer-s3"
import AWS from "aws-sdk"

const s3 = new AWS.S3({
  accessKeyId: "AKIA4I6FAR3KK7AVSVPZ",
  secretAccessKey: "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",
})

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

// const upload = multer({ storage: fileStorageEngine })

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "kitcoek",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname })
    },
    key: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    },
  }),
})

router.post("/single", upload.single("image"), (req, res) => {
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
