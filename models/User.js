const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    ],
    username: {
      type: String,
      required: true,
      max_length: 24,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    validate: {
      validator: function (v) {
          return 
      },
      message: emailMessage => `${emailMessage.value} is not a valid email.`
  }  
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get( function() {
  return `${this.friends.length}`;
})

const User = model('user', userSchema);

module.exports = User;