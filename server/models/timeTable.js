import mongoose from "mongoose"

const timeTableSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
)

const TimeTable = mongoose.model("TimeTable", timeTableSchema)

export default TimeTable
