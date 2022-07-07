import jwt from 'jsonwebtoken'
const userAuth = (handler)=>{
    return async (req,res)=>{
    
    // console.log(req.headers)
    const token = req.headers && req.headers['x-auth-token'];
    // console.log(token)
    //Check if no token
        if (!token) {
          return res.status(401).json({ msg: 'No token, authorization denied' });
        }
        try {
            const decoded = jwt.verify(token, process.env.jwtSecret);
          
            req.user = decoded.user;
            return handler(req, res);
          } catch (err) {
            console.log(err)
            res.status(401).json({ msg: 'Token is not valid' });
          }

    }
}


export default userAuth;