import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserEditMutation } from "../slices/adminApiSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const EditUser = () => {
  const location = useLocation();

  const user = location.state?.user || {};

  const [name, setName] = useState(user.name || "");
  const [roll, setRoll] = useState(user.roll || "");
  const [userId, setUserId] = useState(user.id);
  const [userEdit, { isLoading }] = useUserEditMutation();
  console.log(userId, "userId");
  const editSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      await userEdit({ userId, name }).unwrap();
      toast.success("User Edited");
    } catch (err) {
      toast.error(err?.data || err.error);
    }
  };
  return (
    <div className="pt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Edit User</h1>
      <form
        onSubmit={editSubmitHandle}
        className="w-full max-w-sm mx-auto mt-8"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              User Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-product-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              User Roll
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-product-name"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              onKeyDown={(e) => e.preventDefault()}
            >
              <option value="supervisor">Supervisor</option>
              <option value="engineer">Engineer</option>
              <option value="manager">Manager</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
        </div>

        {isLoading && <Loader />}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>

          <div className="md:w-2/3">
            <button
              className="shadow bg-black hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Edit User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
