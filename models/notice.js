import mongoose from 'mongoose'

const noticeSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        required: false,
    },
    body:{
        type: String,
        required: true,
    },
    featured:{
        type: Boolean,
        required: false
    },
    duration:{
        type: [String],
        required: false,
    },
    date:{
        type: Date,
        required: true,
    },
    images:{
        type: [String],
        required: false,
    },
    link:{
        type: String,
        required: false,
    }
    
},{
    timestamps: true
})

const Notice = mongoose.model('Notice', noticeSchema)

export default Notice