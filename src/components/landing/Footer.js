import { Box } from "@mui/material"
import Link from "../Link";
import Copyright from "./Copyright";

const Footer = ()=>{
    return (
        <>
        <footer>

            <Box sx={{}}>
        
        <Link href='/admin/dashboard'>Go to Admin Dashboard</Link>
        <Copyright />
            </Box>
        </footer>
        </>
    )
}

export default Footer;