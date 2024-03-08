import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import axios from "axios";

const SpeedUpLifeline = () => {
   
  const [lifeline, setLifeline] = useState([]);

  const getAllLifelines = async () => {
    try {
      const { data } = await axios.get("http://localhost:8880/api/admin/lifeline/get-lifeline");
      if (data?.success) {
        setLifeline(data?.lifeline);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Blogs");
    }
  };

  useEffect(() => {
    getAllLifelines();
  }, []);

  return (
    <div className="main-lifeline-bg ">
      <div className="container">
        <div className="row position-relative py-5 d-flex flex-column align-items-center">
          <div className="position-relative ourwork-header py-3">
            <div className="ourwork-underline me-5">
              <h6 className="ourwork">LIFELINE AT SPEEDUP </h6>
            </div>
          </div>
          <div className="col-lg-12">
            <h2 className="fs-2 text-white text-center py-2">
              Life at SpeedUp Infotech Where Dedication Meets Happiness
            </h2>
            <p className="text-center">
              Experience the dynamic life at SpeedUp Infotech, where our
              workforce is not just dedicated but radiates happiness. Our team
              comprises experts in the industry, creating a vibrant work
              environment that fosters collaboration, innovation, and success.
              Join us and be part of a thriving community where every day is a
              journey filled with joy and dedication!
            </p>
          </div>
        </div>

        <div className="row mx-4">
          {lifeline.map((lifelineItem) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={lifelineItem._id}>
              <div className="card">
                <img
                  className="card__background"
                  src={`http://localhost:8880/api/admin/lifeline/lifeline-photo/${lifelineItem._id}`}
                  alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                  width="1920"
                  height="2193"
                />
                <div className="card__content | flow">
                  <a href="#" className="underline-hover-effect">
                    {lifelineItem.title}
                  </a>
                </div>
              </div>
              <button className="m-2">Update</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeedUpLifeline;
