
import userAuth from '../../../middleware/userAuth'



import connectMongo from '../../../utils/db'
import User from '../../../models/User'


 const getUser = async (req, res)=> {
//  console.log('req')
//  console.log(req)
 try {
    console.log('connecting...')
    await connectMongo();
    console.log('connected!')
    let user = await User.findById(req.user.id).select('-password');
   
    res.json(user);
 } catch (err) {
    // console.log(err);
     res.status(500).send('Server Error')
 }

}

export default userAuth(getUser)