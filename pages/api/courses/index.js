import slugify from'slugify'

import userAuth from '../../../middleware/userAuth'



import connectMongo from '../../../utils/db'
import Course from '../../../models/Course'


 const handler = async (req, res)=> {
 const {method,body} = req;
 const {courseName,courseCode,duration, price,online_url} = body;
 console.log('connecting...')
 await connectMongo();
 console.log('connected!')
 if(method === 'POST') {
    try {
      const slug = slugify(courseName);
       
        let course = new Course({
            courseName,slug,courseCode,duration, price,online_url
        });
       await course.save();
        res.json(course);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
 }

 if(method === 'GET') {
    try {
       
 
        let courses = await Course.find()
   
        res.json(courses);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
 }


}


export default handler
// export default userAuth(handler)