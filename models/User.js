const  {Schema, model, models} = require('mongoose');

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


const User = models.user || model('user', UserSchema);

module.exports = User 

