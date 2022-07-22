import AdminLayout from "../../src/components/adminLayout"
import Dashboard from "../../src/components/adminLayout/dashboard"
import withAuth from "../../src/utils/withAuth"

const dashboard = () => {
  return (
   <AdminLayout title='Dashboard' children={<Dashboard />}/>
  )
}

export default dashboard
// export default withAuth(dashboard)