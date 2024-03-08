import React, { useState } from "react";
import Swal from "sweetalert2";
import { Input } from "semantic-ui-react";
import axios from "axios";
import toast from "react-hot-toast";



import emailjs from "emailjs-com";

function Enform() {
  const SERVICE_ID = "service_k24iggk";
  const TEMPLATE_ID = "template_y5e25lk";
  const PUBLIC_KEY = "5SA8v41g5-WM58FPz";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [answer, setAnswer] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        phone,
        city,
      });
      if (res && res.data.success) {
        // Show success toast
        toast.success(res.data && res.data.message);
        // Show prompt
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your request has been sent. Our team will contact you soon.',
          customClass: {
            title: 'white-text',
            content: 'white-text',
            confirmButton: 'red-button'
          },
          background: '#000',
        });
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
        <h3>Enquiry Form</h3>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="enquiryforminput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="form-input-control-last-name"
          control={Input}
          required
        />
        <input
          type="number"
          placeholder="Enter Your Phone No"
          value={phone}
              onChange={(e) => setPhone(e.target.value)}
          id="usercontact"
          className="enquiryforminput"
          required
        />
        <input
          type="text"
          placeholder="Enter Your Email "
          value={email}
              onChange={(e) => setEmail(e.target.value)}
          id="form-input-control-email"
          className="enquiryforminput"
          required
        />
        <input
          type="text"
          placeholder="Enter City"
          value={city}
              onChange={(e) => setCity(e.target.value)}
          id="City"
          className="enquiryforminput"
          required
        />

        <button className="enquiryformbutton" >Submit</button>
       
      </form>
    </div>
  );
}

export default Enform;
