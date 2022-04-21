import generateToken from '../utils/generateToken.js'
import Notice from '../models/notice.js' 

// @desc     Add Survey Data
// @route    POST /api/survey/surveyData
// @access   Public
const addNoticeData = async(req,res) => {
    const {title} = req.body
    
    const existingNotice = await Notice.findOne({title:title})
    if(existingNotice){
        res.status(400).json("Notice of this title already exists")
    }else{
        try{
        const noticeData = await Notice.create(req.body)
        res.status(200).json({msg:"notice created",noticeData})
        }catch(e){
            res.status(400).json(e)
        }
        
    }
}

const getNoticeData = async(req,res) => {
    try{
    const noticeData = await Notice.find()
    res.send(noticeData)
    }catch(e){
        res.status(400).json(e)
    }
}

export{addNoticeData,getNoticeData}