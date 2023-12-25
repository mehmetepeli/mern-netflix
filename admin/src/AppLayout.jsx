import { Outlet } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

const AppLayout = () => {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
};

export default AppLayout;
