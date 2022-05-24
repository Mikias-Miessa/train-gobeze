import AdminLayout from "../../src/components/adminLayout"
import Dashboard from "../../src/components/dashboard"


const dashboard = () => {
  return (
   <AdminLayout title='Dashboard' children={<Dashboard />}/>
  )
}

export default dashboard