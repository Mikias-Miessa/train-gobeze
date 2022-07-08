
import userAuth from '../../../middleware/userAuth'



import connectMongo from '../../../utils/db'
import Class from '../../../models/Class'
import Course from '../../../models/Course'


 const handler = async (req, res)=> {
 const {method} = req;
 console.log('connecting...')
 await connectMongo();
 console.log('connected!')
 
 if(method === 'GET') {
    try {
       
        let classes = await Class.find().populate('course')
    //   console.log(classes)
        res.json(classes);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
 }


}


export default handler
// export default userAuth(handler)