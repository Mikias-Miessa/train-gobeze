
import userAuth from '../../../middleware/userAuth'



import connectMongo from '../../../utils/db'
import Course from '../../../models/Course'


 const handler = async (req, res)=> {
 const {method,body} = req;
 console.log('method : ' + method)
 console.log(body)
 const {courseName,courseCode, price} = body;
 console.log('connecting...')
 await connectMongo();
 console.log('connected!')
 if(method === 'POST') {
    try {
       
        let course = new Course({
            courseName,courseCode, price
        });
       await course.save();
        res.json(course);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
 }


}


export default userAuth(handler)