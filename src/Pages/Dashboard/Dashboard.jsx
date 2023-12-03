import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
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
                           
                            {/* <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Not History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>
                                        Real Payment History</NavLink>
                                </li> */}
                            {/* </> */}
                    
                    {/* shared nav links */}
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