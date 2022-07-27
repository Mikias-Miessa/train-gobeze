import AdminLayout from "../../../src/components/adminLayout"
import Students from "../../../src/components/adminLayout/students"
import withAuth from "../../../src/utils/withAuth"

const students = () => {
  return (
   <AdminLayout title='Students' children={<Students />}/>
  )
}

export default withAuth(students)