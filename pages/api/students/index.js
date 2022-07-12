
import {createRouter} from 'next-connect'
import connectMongo from '../../../utils/db'
import userAuth from '../../../middleware/userAuth'
import Student from '../../../models/Student'
import Course from '../../../models/Course'


  const router = createRouter();

  router
  .use(async (req, res, next) => {
    console.log('connecting...')
    await connectMongo();
    console.log('connected!')
    await next(); // call next in chain
   
  }) .get(async (req, res) => {

    try {
   
       let students = await Student.find().populate('course');
     
       res.json(students);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
  })
 

// create a handler from router with custom
// onError and onNoMatch
export default router.handler({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Server Error!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

 


// export default handler;
// export default userAuth(handler)