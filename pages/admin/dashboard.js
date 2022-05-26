import AdminLayout from "../../src/components/adminLayout"
import Dashboard from "../../src/components/adminLayout/dashboard"

const dashboard = () => {
  return (
   <AdminLayout title='Dashboard' children={<Dashboard />}/>
  )
}

export default dashboard