import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminMenu.css'; 
import { useNavigate } from "react-router-dom";


const AdminMenu = () => {

  const navigate = useNavigate(); 

  const handleUpdateClick = () => {
    navigate("/admin");
  };
  return (
    <div className="admin-dashboard-container">
      <div className="admin-sidebar">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink to="/admin/users" className="navmenu">
            Users
          </NavLink>
          <NavLink to="/admin/blogs" className="navmenu">
            Blogs
          </NavLink>
          <NavLink to="/admin/careerblock" className="navmenu">
            Career Block
          </NavLink>
          <NavLink to="/admin/lifeline" className="navmenu">
            Lifeline at SpeedUp Block
          </NavLink>
        </div>
      </div>
      <div className="admin-content">
        <div className="welcome-message">
          <h1>Welcome to Admin Dashboard</h1>
          <p>This is your one-stop destination for managing users, blogs, career blocks, and lifelines at SpeedUp Block.</p>
          <button onClick={() => handleUpdateClick()} >Back To Home Page</button>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
