
const mongoose=require('mongoose')


const brick=new mongoose.Schema({
    site_id:String,
    date:Date,
    length:Number,
    breadth:Number,
    height:Number,
    nos:Number,
    volume:Number

})

const paint=new mongoose.Schema({
    site_id:String,
    date:Date,
    length:Number,
    breadth:Number,
    nos:Number,
    volume:Number

})

const concrete=new mongoose.Schema({
    site_id:String,
    date:Date,
    length:Number,
    breadth:Number,
    height:Number,
    nos:Number,
    volume:Number

})

const plaster=new mongoose.Schema({
    site_id:String,
    date:Date,
    length:Number,
    breadth:Number,
    nos:Number,
    volume:Number

})



const total_wages=new mongoose.Schema({
    site_id:String,
    date:Date,
    v_brick:Number,
    v_plaster:Number,
    v_paint:Number,
    v_concrete:Number,
    w_brick:Number,
    w_concrete:Number,
    w_paint:Number,
    w_plaster:Number,
    t_brick:Number,
    t_paint:Number,
    t_concrete:Number,
    t_plaster:Number,
    t_wages:Number


})




const user_login=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    dob:String,
    username:String,
    password:String
})












exports.brick=mongoose.model("brick",brick,"brick")
exports.concrete=mongoose.model("concrete",concrete,"concrete")
exports.paint=mongoose.model("paint",paint,"paint")
exports.plaster=mongoose.model("plaster",plaster,"plaster")
exports.user_login=mongoose.model("user_login",user_login,"user_login")


exports.total_wages=mongoose.model("total_wages",total_wages,"total_wages")


