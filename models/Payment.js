const { Schema, model, models } = require('mongoose');

const PaymentSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'student',
    },
    payment_with: {
      type: String,
    },
    amount: {
      type: String,
    },
    bank: {
      type: String,
    },
    reference: {
      type: String,
    },
    deposited_by: {
      type: String,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: 'created',
    },
  },
  {
    timestamps: true,
  }
);

const Payment = models.payment || model('payment', PaymentSchema);

module.exports = Payment;
