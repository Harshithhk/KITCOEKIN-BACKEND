import express from "express"
import {
  getAlumniData,
  addAlumni,
  deleteAlumniData,
} from "../controllers/alumniController.js"

// Multer Config
import multerS3 from "multer-s3"
import AWS from "aws-sdk"
import multer from "multer"
const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
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

router.route("/").get(getAlumniData).post(upload.single("image"),addAlumni).delete(deleteAlumniData)

export default router

