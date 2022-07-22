const  {Schema, model, models} = require('mongoose');

const CertificateSchema = new Schema(
  {
    img:{
        type: String
    },
    student:{
      type: Schema.Types.ObjectId,
      ref: 'student',
    },
    
  },
  {
    timestamps: true,
  }
);



const Certificate = models.certificate || model('certificate', CertificateSchema);

module.exports = Certificate 
