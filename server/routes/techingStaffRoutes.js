import express from "express"
// s3 changes are below

// start

// let multerS3 = require('multer-s3')
// const AWS = require('aws-sdk');

// const s3 = new AWS.S3({
//   accessKeyId: 'AKIA4I6FAR3KLCYDRBNQ',
//   secretAccessKey: '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'
// });

// end

const router = express.Router()
import {
  addTeachingStaffData,
  getTeachingStaff,
  deleteTeachingStaff,
} from "../controllers/teachinigStaffController.js"
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

// s3 changes are below

//  start

// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: 'sfa-future-classroom',
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, new Date().toISOString() + file.originalname)
//     }
//   })
// })

//  end

router.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file)
  res.send({ msg: "Single FIle upload success", url: req.file })
})

router.post("/multiple", upload.array("images", 3), (req, res) => {
  res.send("Multiple Files Upload Success")
})

router
  .route("/")
  .post(addTeachingStaffData)
  .get(getTeachingStaff)
  .delete(deleteTeachingStaff)

export default router
