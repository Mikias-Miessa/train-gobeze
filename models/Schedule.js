const {Schema, model, models} = require('mongoose');

const scheduleSchema = new Schema({
  days: {
    type: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      required: true
    }],
    required: true
  },
  startHour: {
    type: String,
    required: true
  },
  endHour: {
    type: String,
    required: true
  },
});

const Schedule = models.schedule || model('schedule', scheduleSchema);

module.exports = Schedule 