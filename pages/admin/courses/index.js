import AdminLayout from "../../../src/components/adminLayout"
import Courses from "../../../src/components/adminLayout/courses"
import withAuth from "../../../src/utils/withAuth"

const courses = () => {
  return (
   <AdminLayout title='Courses' children={<Courses />}/>
  )
}

export default withAuth(courses)