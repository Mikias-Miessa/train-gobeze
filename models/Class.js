const  {Schema, model, models} = require('mongoose');

const ClassSchema = new Schema(
  {
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
      },
    schedule: {
      type: String,
    },
    instructor: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    remark:{
      type: String
    },
    students: [
        {
          type: Schema.Types.ObjectId,
          ref: 'student',
        },
      ],
  },
  {
    timestamps: true,
  }
);



const Class = models.Class || model('user', ClassSchema);

module.exports = Class 