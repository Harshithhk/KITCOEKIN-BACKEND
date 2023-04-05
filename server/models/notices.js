import mongoose from "mongoose"

const noticeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: false,
    },
    fileUrl: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Notice = mongoose.model("Notice", noticeSchema)

export default Notice
