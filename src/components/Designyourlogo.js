import React from "react";

function Designyourlogo() {
  return (
    <div className="container">
      <div className="text-center py-4 ">
        <h1>Your business name</h1>
      </div>

      <div className="row px-5  py-2 ">
       <div className="form-group logoform">
       <h3 className="py-4">For example, our business name is LOGO.com</h3>
    
        <input type="text" className="form-control w-50 " />

       </div>
       <button className="btn btn-success w-25 mx-auto">Submit</button>

      </div>
    </div>
  );
}

export default Designyourlogo;
