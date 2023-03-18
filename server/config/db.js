import mongoose from "mongoose"

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Harshith:Harshith@cluster0.sdqvr.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(`Error: ${err.message}`)
    if (process.env.MODE !== "DEVELOPMENTT") process.exit(1)
  }
}

export default connectDB
