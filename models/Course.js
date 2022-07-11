const  {Schema, model, models} = require('mongoose');

const CourseSchema = new Schema(
  {
    courseName: {
      type: String,
    },
    slug:{
      type: String
    },
    courseCode: {
      type: String,
    },
    price: {
      type: String,
    },
    online_url:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);



const Course = models.course || model('course', CourseSchema);

module.exports = Course 