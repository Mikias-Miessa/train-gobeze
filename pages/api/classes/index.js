
import userAuth from '../../../middleware/userAuth'



import connectMongo from '../../../utils/db'
import Class from '../../../models/Class'
import Course from '../../../models/Course'


 const handler = async (req, res)=> {
 const {method,body} = req;
 const {course,description,schedule,start_date, instructor,remark} = body;
 console.log('connecting...')
 await connectMongo();
 console.log('connected!')
 if(method === 'POST') {
    try {
       
        let newClass = new Class({
            course,description,schedule,start_date, instructor,remark
        });
       await newClass.save()

       let populatedNewClass = await Class.findById(newClass._id).populate('course')

        res.json(populatedNewClass);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
 }

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