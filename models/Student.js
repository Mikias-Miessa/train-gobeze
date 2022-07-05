const  {Schema, model, models} = require('mongoose');

const StudentSchema = new Schema(
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



const Student = models.student || model('student', StudentSchema);

module.exports = Student 
