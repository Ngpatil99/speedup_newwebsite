import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8880/api/auth/users");
      if (data?.success) {
        setUsers(data?.user);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Users");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      let answer = window.prompt("Are you sure you want to delete this user?");
      if (!answer) return;
      const { data } = await axios.delete(
        `http://localhost:8880/api/auth/deleteuser/${id}`
      );
      toast.success("User deleted successfully");
      navigate("/users", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="position-relative ourwork-header py-3 m-5 d-flex justify-content-between align-items-center">
        <div className="benefit-underline-career">
          <h6 className="benefit-career">Users</h6>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/admin/adminmenu");
            }}
          >
            Back To Menu
          </button>
        </div>
      </div>{" "}
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.city}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
