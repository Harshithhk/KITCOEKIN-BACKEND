import mongoose from "mongoose"

const eventSchema = mongoose.Schema(
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

const Event = mongoose.model("Event", eventSchema)

export default Event
