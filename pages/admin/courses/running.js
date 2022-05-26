import AdminLayout from "../../../src/components/adminLayout"
import Courses from "../../../src/components/adminLayout/courses/Running"

const courses = () => {
  return (
   <AdminLayout title='Running Courses' children={<Courses />}/>
  )
}

export default courses