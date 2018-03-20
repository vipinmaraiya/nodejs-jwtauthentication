const { mongoose } = require("../db/mongoose");

let Todo = mongoose.model("Todo", {
    text:{
        type: String,
        required:true,
        trim: true,
        minlength:1
    },
    completedAt:{
        type: Number,
        default: null
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports = {Todo};