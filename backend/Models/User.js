const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

userSchema.plugin(AutoIncrement, { inc_field: "id" });

const User = mongoose.model("User", userSchema);

module.exports = User;
