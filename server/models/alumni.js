import mongoose from "mongoose";

const alumniSchema = mongoose.Schema(
  {
    photoUrl: {
      type: String,
      required: false,
    },
    name: {
      first_name: {
        type: String,
        required: true,
      },
      middle_name: {
        type: String,
        required: false,
      },
      last_name: {
        type: String,
        required: true,
      },
    },
    date_of_birth: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    pass_out_year: {
      type: String,
      required: false,
    },
    branch: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    designation: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    permanent_address: {
      permanent_street: {
        type: String,
        required: false,
      },
      permanent_district: {
        type: String,
        required: false,
      },
      permanent_state: {
        type: String,
        required: false,
      },
      permanent_country: {
        type: String,
        required: false,
      },
    },
    current_address: {
      display_name: {
        type: String,
        required: false,
      },
      address: {
        type: Object,
        required: false,
      },
      lat: {
        type: Number,
        required: false,
      },
      lon: {
        type: Number,
        required: false,
      },
      accountStatus: {
        type: Number,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Alumni = mongoose.model("Alumni", alumniSchema);

export default Alumni;
