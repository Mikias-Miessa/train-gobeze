import AdminLayout from "../../src/components/adminLayout"
import Users from "../../src/components/adminLayout/users"

const users = () => {
  return (
   <AdminLayout title='Users' children={<Users />}/>
  )
}

export default users