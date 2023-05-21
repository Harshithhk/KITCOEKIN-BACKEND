import express from "express"
import {
  getAlumniData,
  addAlumni,
  deleteAlumniData,
  updateAlumni
} from "../controllers/alumniController.js"

// Multer Config
import multerS3 from "multer-s3"
import AWS from "aws-sdk"
import multer from "multer"

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "kitcoek",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname })
    },
    key: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname)
    },
  }),
})

const router = express.Router()

router.post("/alumniimage", upload.single("image"), (req, res) => {
  res.send({ msg: "Single Image upload success", url: req.file })
})

router.route("/").get(getAlumniData).post(upload.single("image"),addAlumni).put(upload.single("image"),updateAlumni).delete(deleteAlumniData)

export default router

