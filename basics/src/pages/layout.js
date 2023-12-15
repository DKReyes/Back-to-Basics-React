import Navbar from '../components/navbar/navbar';
import { Outlet, Link } from "react-router-dom";

function Layout() {

return (
    <>
        <Navbar />
        
        <Outlet />
    </>
)};

export default Layout;