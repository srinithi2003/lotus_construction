
const mongoose=require('mongoose')

exports.connectDB=async()=>await mongoose.connect('mongodb+srv://nanthan:nanthan0723@cluster0.pcn55w4.mongodb.net/lotus')
 
