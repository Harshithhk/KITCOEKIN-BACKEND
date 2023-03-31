import express from "express"

import { fileURLToPath } from "url"
import path, { dirname } from "path"

// Multer Config
import multerS3 from "multer-s3"
import AWS from "aws-sdk"

const router = express.Router()
import {
  addImageGallery,
  deleteImageGalleryData,
  getImageGalleryData,
} from "../controllers/imageGalleryController.js"

import multer from "multer"
const s3 = new AWS.S3({
  accessKeyId: "AKIAWABUOTYHQMLXC2NX",
  secretAccessKey: "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",
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

router.post("/imagegallery/singleimage", upload.single("image"), (req, res) => {
  res.send({ msg: "Single Image upload success", url: req.file })
})

router
  .route("/imagegallery")
  .post(addImageGallery)
  .get(getImageGalleryData)
  .delete(deleteImageGalleryData)

export default router
