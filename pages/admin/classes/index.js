import AdminLayout from "../../../src/components/adminLayout"
import Classes from "../../../src/components/adminLayout/classes"
import withAuth from "../../../src/utils/withAuth"

const classes = () => {
  return (
   <AdminLayout title='Classes' children={<Classes />}/>
  )
}

export default withAuth(classes)