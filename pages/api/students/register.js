import connectMongo from '../../../utils/db'
import Student from '../../../models/Student'
import Payment from '../../../models/Payment'


export default async function addStudent(req, res){
 const {name, email, phone, bank,course} = req.body;
 try {
    console.log('connecting...')
    await connectMongo();
    console.log('connected!')
   
   const newStudent = await Student.create({
       name,email,phone,course 
   })
   const payment = await Payment.create({
   student: newStudent._id,bank
})
       res.json(newUser)
 } catch (err) {
     console.log(err);
     res.status(500).send('Server Error')
 }


}