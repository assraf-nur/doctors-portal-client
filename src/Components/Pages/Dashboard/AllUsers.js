import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const {data: users, isLoading} = useQuery('users', ()=> fetch(`http://localhost:5000/user`,
    // for access token of JWT
    {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }


    }).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }

    console.log(users);


    return (
        <div>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th><></></th>
                        <th><></></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    {users.map(user => <UserRow key={user._id} user={user}></UserRow>)}
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;<h2>All users</h2>