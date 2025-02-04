let mongoose = require("mongoose")

let PostSchema = new mongoose.Schema({
    post_img1 : {
        type : String,
        required : true , 
    },
    categori :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }],
    main_heading:{
        type : String
    },
    description_1:{
        type : String
    },
    post_img2 : {
        type : String,
        required : true , 
    },
    description_2:{
        type : String
    },
    post_img3 : {
        type : String,
        required : true , 
    },
    description_3:{
        type : String
    },
    post_img4 : {
        type : String,
        required : true , 
    },
    post_img5 : {
        type : String,
        required : true , 
    },
    description_4:{
        type : String
    },
    post_img6 : {
        type : String,
        required : true , 
    },
    cat_name : {
        type :String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type : String
    }
})
 
let POST = mongoose.model("postsmodel1", PostSchema)

module.exports  = POST