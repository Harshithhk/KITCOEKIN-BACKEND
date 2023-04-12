import mongoose from "mongoose"

const enquirySchema = mongoose.Schema(
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
    taluka: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Enquiry = mongoose.model("Enquiry", enquirySchema)

export default Enquiry
