import React from "react";

import "./Applynow.css";
function Applynow() {
  return (
    <div>
      <div class="col-md-12">
        <form className="applynow-form"
          accept-charset="UTF-8"
          action="https://getform.io/f/{your-form-endpoint-goes-here}"
          method="POST"
          enctype="multipart/form-data"
          target="_blank"
        >
          <div class="form-group">
            <label for="exampleInputName">Full Name</label>
            <input
              type="text"
              name="fullname"
              class="form-control"
              id="exampleInputName"
              placeholder="Enter your name"
              required="required"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" required="required">
              Email address
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email address"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          
        
          <div class="form-group">
            <label for="example-tel-input" class="col-2 col-form-label">
              Telephone
            </label>
            <div class="col-10">
              <input
                class="form-control"
                name="tel"
                type="tel"
                value="1-(555)-555-5555"
                id="example-tel-input"
              />
            </div>
          </div>
      
          <div class="form-group mt-3">
            <label class="mr-4">Upload your CV:</label>
            <input type="file" name="file" />
          </div>
          <button type="submit" class="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Applynow;
