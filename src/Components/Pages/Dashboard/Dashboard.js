import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* <!-- Page content here --> */}
            <h2 className='text-5xl text-purple-700'>Dashboard</h2>
            <Outlet/>
        </div> 
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label> 
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointments</Link></li>
            <li><Link to='/dashboard/review'>My review</Link></li>
            { admin && <>
                <li> <Link to='/dashboard/users'>All Users</Link> </li>
                <li> <Link to='/dashboard/addDoctor'>Add a Doctor</Link> </li>
            </>
            }
            </ul>
        
        </div>
        </div>
    );
};

export default Dashboard;