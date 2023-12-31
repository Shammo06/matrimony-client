import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import useUser from "../../hook/useUser";
import { FaHome,FaUserEdit,FaUserCheck,FaUserPlus, FaStreetView,FaUserClock,FaUserCircle} from "react-icons/fa";


const Dashboard = () => {
    const [ID] = useUser();
    const { user,logOut} = useContext(AuthContext);
    const data = ID.find(item => item && item.email === `${user.email}`);
    
    const handleClick = () =>{
        logOut();
    }
    return (
        <div className="flex">
            
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 pt-14">
                    { data?.role==='admin'?
                    <>
                            <li className='pb-5'>
                                <NavLink   to="/dashboard">
                                <button className='flex  gap-3'><FaHome className='text-2xl'/>Admin Dashboard</button></NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/manageuser">
                                <button className='flex gap-3'><FaUserEdit className='text-2xl'/> Manage Users</button>
                                </NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/approvePremium">
                                <button className='flex gap-3'><FaUserPlus className='text-2xl'/>Approve Premium</button> 
                                </NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/approvedRequest">
                                <button className='flex gap-3'><FaUserCheck className='text-2xl'/>Approve Contact Request</button>
                                </NavLink>
                            </li>
                            
                    </>
                        :
                    <>
                            <li className='pb-5'>
                                <NavLink to="/dashboard">
                                <button className='flex gap-3'><FaUserEdit className='text-2xl'/>Edit Biodata</button></NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/viewbiodata">
                                <button className='flex gap-3'><FaStreetView className='text-2xl'/>View Biodata</button>
                                </NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/contactrequest">
                                <button className='flex gap-3'><FaUserClock className='text-2xl'/>My Contact Request</button>  
                                </NavLink>
                            </li>
                            <li className='pb-5'>
                                <NavLink to="/dashboard/favourite">
                                <button className='flex gap-3'><FaUserCircle className='text-2xl'/>My Favourite Biodata</button>
                                </NavLink>
                            </li>
                            
                    </>
                    }
                           
                    <li className='pt-5'>
                        <button onClick={handleClick} className='bg-rose-700 w-28 rounded-lg text-zinc-100'>Log Out</button>
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