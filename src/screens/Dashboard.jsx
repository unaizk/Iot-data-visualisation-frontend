import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserListMutation } from '../slices/adminApiSlice';;
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Dashboard = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const [getUsers, {isLoading} ] = useUserListMutation()
    useEffect(() =>{
        const getAllUsers = async() =>{
            try {
                const res = await getUsers().unwrap();
                setUsers(res)
            } catch (err) {
                toast.error(err?.data || err.error);
            }
        }
        getAllUsers()
    },[])

    let serialNumber = 1;

    const navigateToEdit = (userId) => {
        const userToEdit = users.find((user) => user.id === userId);
        if (userToEdit) {
          // Use the useNavigate hook to navigate to the edit page with the product details
          navigate(`/admin/editUser`, { state: { user: userToEdit } });
        }
      };
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg pt-20">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL.NO
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) =>(
                <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">{serialNumber++}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => navigateToEdit(user.id)}
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
