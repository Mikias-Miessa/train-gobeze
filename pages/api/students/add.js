import connectMongo from '../../../utils/db'
import User from '../../../models/User'


export default async function addStudent(req, res){
 const {name, email, phone, password,role} = req.body;
 try {
    console.log('connecting...')
    await connectMongo();
    console.log('connected!')
    console.log('creating user...')
   const newUser = await User.create({
       name,email,phone,password,role 
   })
   console.log('created user')
   
       res.json(newUser)
 } catch (err) {
     console.log(err);
     res.status(500).send('Server Error')
 }

}