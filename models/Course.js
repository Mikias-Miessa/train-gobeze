const  {Schema, model, models} = require('mongoose');

const CourseSchema = new Schema(
  {
    courseName: {
      type: String,
    },
    courseCode: {
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



const Course = models.course || model('course', CourseSchema);

module.exports = Course 