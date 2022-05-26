import AdminLayout from "../../../src/components/adminLayout"
import Courses from "../../../src/components/adminLayout/courses"

const courses = () => {
  return (
   <AdminLayout title='Courses' children={<Courses />}/>
  )
}

export default courses