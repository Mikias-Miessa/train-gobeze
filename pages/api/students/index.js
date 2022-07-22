
import {createRouter} from 'next-connect'
import connectMongo from '../../../utils/db'
import userAuth from '../../../middleware/userAuth'
import Student from '../../../models/Student'
import Class from '../../../models/Class'


  const router = createRouter();

  router
  .use(async (req, res, next) => {
    console.log('connecting...')
    await connectMongo();
    console.log('connected!')
    await next(); // call next in chain
   
  }) .get(async (req, res) => {

    try {
   
       let students = await Student.find().populate({
         path:'course',
         populate:{
           path:'course'
         }
       });
     
       res.json(students);
     } catch (err) {
         console.log(err);
         res.status(500).send('Server Error')
     }
  })
  // .delete(async (req, res) => {

  //   try {
   
  //     await Student.deleteMany({})
     
  //      res.json({
  //        msg: 'all students deleted'
  //      });
  //    } catch (err) {
  //        console.log(err);
  //        res.status(500).send('Server Error')
  //    }
  // })
 

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