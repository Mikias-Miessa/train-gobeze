const  {Schema, model, models} = require('mongoose');

const CourseSchema = new Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);



const Course = models.Course || model('user', CourseSchema);

module.exports = Course 