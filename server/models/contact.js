import mongoose from "mongoose"

const contactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    emailAddress: {
      type: String,
      required: true,
    },

    mobileNo: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Contact = mongoose.model("Contact", contactSchema)

export default Contact
