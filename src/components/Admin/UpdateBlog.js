import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const params = useParams();

  const getSingleBlog = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8880/api/admin/blog/get-blog/${params.id}`
      );
      setTitle(data.blog.title);
      setId(data.blog._id);
      setDescription(data.blog.description);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleBlog();
    //eslint-disable-next-line
  }, []);

  const handleUpdateClick = async () => {
    try {
      const blogData = new FormData();
      blogData.append("title", title);
      blogData.append("description", description);
  
      const { data } = await axios.put(
        `http://localhost:8880/api/admin/blog/update-blog/${id}`,
        blogData
      );
  
      if (data && data.success) {
        toast.success("Blog Updated Successfully");
        navigate("/admin/blogs");
      } else {
        toast.error(data && data.message ? data.message : "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  
  return (
    <>
      <div className="container-fluid py-5 main-blog-bg">
        <div className="row position-relative d-flex flex-column align-items-center">
          <div className="position-relative ourwork-header">
            <div className="benefit-underline-blog">
              <h6 className="benefit-blog">OUR BLOG</h6>
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
          <div className="col-lg-3 col-md-3 col-sm-12 lower_cards card1_container m-5">
            <div className="card px-3 shadow-sm card1-bg">
              <div className="card-body">
                <p className="card-title our_expertise pt-4 pb-2">Latest</p>
                <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                  <input
                    type="text"
                    value={title}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </h4>
                <p className="card-text mb-5 text">
                  <input
                    type="text"
                    value={description}
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </p>
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
            <button className="update m-5" onClick={handleUpdateClick}>
              Update Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
