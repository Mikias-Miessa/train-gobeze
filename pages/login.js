import HeadLayout from '../src/components/HeadLayout'
import Login from '../src/components/Login'
// import withAuth from '../src/utils/withAuth'
 const LoginPage = ()=> {
  return (
    <HeadLayout >
   
      <Login />
    
    </HeadLayout>
  );
}

export default LoginPage
// export default withAuth(LoginPage)