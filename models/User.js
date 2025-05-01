// login schema user model register schema
import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim: true,
        maxlength: [20, "Username cannot be more than 20 characters"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+\.)+([a-zA-Z0-9]{2,4})+$/,
            "Please provide a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        maxlength: 6,
        select: false
    },
})

const UserModel = model("User", UserSchema);

export default UserModel;