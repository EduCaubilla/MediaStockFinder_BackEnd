import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name required"]
    },

    last_name: {
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
        idFont: String,
        font: String,
        title: String,
        description: String,
        authorName: String,
        authorimage: String,
        categories: String,
        tags: String,
        imageThumb: String,
        imageSmall: String,
        imageMedium: String,
        imageLarge: String
    }]
});

// autoIncrement.initialize(mongoose.connection);

// userSchema.plugin(autoIncrement.plugin, 'user');
// mongoose.model('user', userSchema);

export default userSchema;