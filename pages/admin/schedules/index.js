import AdminLayout from "../../../src/components/adminLayout"
import Schedules from "../../../src/components/adminLayout/schedules"
import withAuth from "../../../src/utils/withAuth"

const schedules = () => {
  return (
   <AdminLayout title='Schedules' children={<Schedules />}/>
  )
}

export default withAuth(schedules)