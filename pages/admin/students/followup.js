import AdminLayout from "../../../src/components/adminLayout"
import Students from "../../../src/components/adminLayout/students/Followup"
import withAuth from "../../../src/utils/withAuth"

const students = () => {
  return (
   <AdminLayout title='Registered Students Followup' children={<Students />}/>
  )
}

export default withAuth(students)