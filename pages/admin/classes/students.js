import AdminLayout from "../../../src/components/adminLayout"
import Students from "../../../src/components/adminLayout/classes/Students"

const students = () => {
  return (
   <AdminLayout title='Students' children={<Students />}/>
  )
}

export default students