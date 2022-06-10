const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

//match:look up regx{"must be an email"}



    thought: {
      type: Schema.Types.ObjectId,
      ref:"Thought",
      
    },

    friends: {
      type: Schema.Types.ObjectId,
      ref:"User",
      
    },


    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id:false,
  }
);

const User = model('User', userSchema);

module.exports = User;
