import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },

    lastName: {
        type: String,
        required: [true, "Last name required"]
    },

    email: {
        type: String,
        required: [true, "Email required"],
        unique: [true, "This email is already in use"]
    },
    password: {
        type: String,
        required: [true, "Password required"],
    },

    desk: [{
        source: String,
        idSource: String,
        title: String,
        description: String,
        authorName: String,
        authorimage: {
            small: String,
            medium: String,
            large: String
        },
        categories: [],
        tags: [],
        imageThumb: String,
        imageSmall: String,
        imageMedium: String,
        imageLarge: String,
        media: String
    }]
});

export default userSchema;