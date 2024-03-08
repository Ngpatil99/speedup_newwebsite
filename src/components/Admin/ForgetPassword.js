import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";



const ForegtPassword = () => {

    const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8880/api/admin/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/admin");
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
        <h3>Reset Password </h3>
        
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
          placeholder="Enter New Password"
          value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
          id="Password"
          className="enquiryforminput"
        />

        <input
          type="Password"
          placeholder="Enter Your Secrete Answer"
          value={answer}
              onChange={(e) => setAnswer(e.target.value)}
          id="Answer"
          className="enquiryforminput"
        />

        <button className="enquiryformbutton"  onClick={() => {
                navigate("/admin");
              }}>Login</button>

       
      </form>
    </div>
  )
}

export default ForegtPassword
