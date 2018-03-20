const {mongoose} = require("../db/mongoose");

let User = mongoose.model("User", {
    Email:{
        type:String,
        required: true,
        trim:true,
        minlength:1
    }
});

module.exports = {User};
