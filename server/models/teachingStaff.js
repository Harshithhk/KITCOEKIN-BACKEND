import mongoose from "mongoose"

const techiingStaffSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    designation: {
      type: String,
      required: false,
    },
    qualifications: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    mobile: {
      type: String,
      required: false,
    },
    imgUrl: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const TimeTable = mongoose.model("TeachingStaff", techiingStaffSchema)

export default TimeTable
