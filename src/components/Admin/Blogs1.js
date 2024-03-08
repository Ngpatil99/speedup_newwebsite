import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8880/api/admin/blog/get-blog"
      );
      if (data?.success) {
        setBlogs(data?.blog);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Blogs");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  // console.log(blogs);

  const handleUpdateClick = (id) => {
    // Navigate to the update blog route with the blog id as a URL parameter
    navigate(`/admin/updateblog/${id}`);
  };

  return (
    <div className="container-fluid py-5 main-blog-bg">
      <div className="row position-relative d-flex flex-column align-items-center">
        <div className="position-relative ourwork-header d-flex justify-content-between align-items-center">
          <div className="benefit-underline-blog">
            <h6 className="benefit-blog">OUR BLOG</h6>
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
        </div>

        <div className="col-lg-12">
          <h2 className="fs-2 text-white text-center py-2">
            Enjoy our incredible recently <br />
            completed projects.
          </h2>
        </div>
      </div>
      <div className="row blog-card-row">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-3 col-sm-12 lower_cards card1_container m-5"
          >
            <div className="card px-3 shadow-sm card1-bg">
              <div className="card-body">
                <p className="card-title our_expertise pt-4 pb-2">Latest</p>
                <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                  {item.title}
                </h4>
                <p className="card-text mb-5 text">{item.description}</p>
              </div>

              <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                  viewBox="0 0 67 71"
                  className="zoom-out"
                >
                  <defs></defs>
                  {/* SVG Path omitted for brevity */}
                </svg>
              </div>
            </div>
            <button
              className="update m-5"
              onClick={() => handleUpdateClick(item._id)}
            >
              Update Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
