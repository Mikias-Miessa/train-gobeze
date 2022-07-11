const  {Schema, model, models} = require('mongoose');

const ClassSchema = new Schema(
  {
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
      },
      slug:{
        type: String
      },
      description:{
        type: String
      },
    schedule: {
      type: String,
    },
    instructor: {
      type: String,
    },
    thumbnail: {
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



const Class = models.class || model('class', ClassSchema);

module.exports = Class 