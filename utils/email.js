import nodemailer from 'nodemailer';
import followRedirects from 'follow-redirects'

const https = followRedirects.https;

export const sendEmail = async (obj) => {
  console.log(obj)
  const { _id, email, name, course, course_type, bank } = obj;
//   const bankAccount = bank == 'cbe' ? '1000228828843' : '0146776045011';

//   const bankName =
//     bank == 'cbe' ? 'Comercial bank of Ethiopial' : 'Dashen Bank';
//   let accountName = 'Gobeze Consult PLC';
//   const price = course && course.price;
//   try {
   
// //     <p>ሰላም ${name},</p>
// //     <p>${amount} ብር ለመርዳት ቃል ስለገቡ እናመሰግናለን!</p>
   
// //     <p>እርዳታዎን በኢትዮጵያ ንግድ ባንክ መፈጸም ይችላሉ</p>
// //     <div style="margin : 20px 0">
// //     <h3>የክፍያ ዝርዝር </h3>
// //     <p> <span style="font-weight: bold">ስም : </span> ${accountName}</p>
// //     <p> <span style="font-weight: bold"> አካውንት ቁጥር : </span> ${bank}</p>
// //     <p>ክፍያ ከፈጸሙ በኋላ <a href="${
// //       process.env.NODE_ENV === 'development'
// //         ? 'http://localhost:3000/'
// //         : 'https://campaign.n4ed.org/'
// //     }confirm-am/${
// // newIncome._id && newIncome._id
// // }" className="">ይህንን ማስፈንጠሪያ</a> በመንካት ማስገባትዎን ያረጋግጡ ,</p>
// //     <p>እገዛ ከፈለጉ በ  <a href='tel:+251966784304'>+251966784304</a> ይደውሉ</p>
   
// {/* <div style="height: 1px; background: #a5a5a5; margin: 24px 0;"></div> */}
// //     </div>

//    let  msg = `
       
//   <p>Dear ${name},</p>
//   <p>Welcome to Gobeze Training.</p>
 
//   <p>You can now deposit to ${bankName} to enroll in ${
//       course.name && course.name
//     } Training.</p>
//   <div style="margin : 20px 0">
//   <h3>PAYMENT DETAILS </h3>
//   <p> <span style="font-weight: bold">Account No: </span> ${bankAccount}</p>
//   <p> <span style="font-weight: bold">Name: </span> ${accountName}</p>      
//   <p> <span style="font-weight: bold">Amount: </span> ${price && price}</p>
//   <p>After you finish depositing  <a href="https://gobeze.com/confirmation/${
//     _id && _id
//   }" className="">Click here to confirm your payment</a></p>
//   <p>If you need assistance please call 0929336352</p>
 
//   </div>
//   <p> Best Regards,</p>
//   <p> Gobeze Team.</p>
          
//           `;
//     const emailSubject = `Course enrolment for ${
//       course.name && course.name
//     } - gobeze.com`;
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: 'traingobeze@gmail.com', // generated ethereal user
//         pass: process.env.emailPassword, // generated ethereal password
//       },
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Gobeze Training" <traingobeze@gmail.com>', // sender address
//       to: `${email}`, // list of receivers
//       subject: `${emailSubject}`, // Subject line
//       text: 'msg', // plain text body
//       html: msg, // html body
//       cc: 'luwamaddis@gmail.com, meaza2095@gmail.com',
//     });

//     console.log('Message sent: %s', info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//   } catch (err) {
//     console.error(err);
//   }
};
