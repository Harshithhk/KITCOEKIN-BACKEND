import mongoose from "mongoose";
import bcrypt from  'bcryptjs'
const alumniSchema = mongoose.Schema(
  {
    photoUrl: {
      type: String,
      required: false,
    },
    name: {
      first_name: {
        type: String,
        required: false,
      },
      middle_name: {
        type: String,
        required: false,
      },
      last_name: {
        type: String,
        required: false,
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
      required: true,
      index: true, unique: true
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
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
      
    },
    // ACTIVE
    // PENDING
    // INACTIVE
    accountStatus: {
      type: String,
      required: false,
    },
    bytes: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


alumniSchema.methods.matchPassword = async function(enteredPasswrod){
  return await bcrypt.compare(enteredPasswrod, this.password)
}

alumniSchema.pre('save', async function(next){
  if(!this.isModified('password')){
      next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password =await bcrypt.hash(this.password,salt)
})

alumniSchema.pre('findOneAndUpdate', async function(next){
  const update = this.getUpdate();

  if (update && update.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(update.password, salt);
    this.setUpdate({ password: hashedPassword });
  }

  })
const Alumni = mongoose.model("Alumni", alumniSchema);
Alumni.createIndexes();

export default Alumni;
