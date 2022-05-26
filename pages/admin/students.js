import AdminLayout from "../../src/components/adminLayout"
import Students from "../../src/components/adminLayout/students"

const students = () => {
  return (
   <AdminLayout title='Students' children={<Students />}/>
  )
}

export default students