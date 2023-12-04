import { NavLink, Outlet } from "react-router-dom";
import useUser from "../../hook/useData";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";


const Dashboard = () => {
    const [ID] = useUser();
    const { user} = useContext(AuthContext);
    const data = ID.find(item => item && item.email === `${user.email}`);
    return (
        <div className="flex">
            
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    { data?.role==='admin'?
                    <>
                            <li>
                                <NavLink to="/dashboard/adminDashboard">
                                    <button className='bg-gray-400'>Admin Dashboard</button></NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedPremium">
                                    Approved Premium   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedRequest">
                                    Approved Contact Request
                                </NavLink>
                            </li>
                            
                    </>
                        :
                    <>
                            <li>
                                <NavLink to="/dashboard/editbiodata">
                                    <button className=''>Edit Biodata</button></NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/viewbiodata">
                                    View Biodata
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/contactrequest">
                                    My Contact Request   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/favourite">
                                    My Faviourite Biodata
                                </NavLink>
                            </li>
                            
                    </>
                    }
                           
                    <li>
                        <button className=''>Log Out</button>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;