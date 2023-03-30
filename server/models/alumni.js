import mongoose from "mongoose"

const alumniSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    prn: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    yearOfGraduation: {
        type: Number,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    image: {
        type: String,
        required: false
    }
},
  {
    timestamps: true,
  }
)

const Alumni = mongoose.model("Alumni", alumniSchema)

export default Alumni
