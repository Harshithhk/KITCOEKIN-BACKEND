import mongoose from 'mongoose'

const connectDB = async()=>{
    console.log(process.env.MONGO_URI)
    try{
        const conn = await mongoose.connect("mongodb+srv://root:root@cluster0.nwwbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useCreateIndex:true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`)
            }
        catch(err){
            console.log(`Error: ${err.message}`)
            if(process.env.MODE !== "DEVELOPMENT")
                process.exit(1)
          }
    }

    export default connectDB


    