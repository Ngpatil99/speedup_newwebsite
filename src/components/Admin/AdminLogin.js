import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";




function Enform() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


// form function
const handleOnSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:8880/api/admin/login", {
      email,
      password,
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      navigate("/admin/adminmenu")
      
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  
  return (
    <div>
      <form className="enquiryform" onSubmit={handleOnSubmit}>
        <h3>Admin Login</h3>
        
        <input
          type="text"
          placeholder="Enter Your Email "
          value={email}
              onChange={(e) => setEmail(e.target.value)}
          id="form-input-control-email"
          className="enquiryforminput"
        />
        <input
          type="Password"
          placeholder="Enter Password"
          value={password}
              onChange={(e) => setPassword(e.target.value)}
          id="Password"
          className="enquiryforminput"
        />

        <button className="enquiryformbutton"  onClick={() => {
                navigate("/admin/forgotpassword");
              }}>Forget Password</button>
        <button className="enquiryformbutton">Submit</button>

       
      </form>
    </div>
  );
}

export default Enform;
