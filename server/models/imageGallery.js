import mongoose from "mongoose"

const imageGallerySchema = mongoose.Schema(
  {
    fileUrl: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const ImageGallery = mongoose.model("ImageGallery", imageGallerySchema)

export default ImageGallery
