import React, { useState } from "react";
import "./Blog.css";
import { ArrowRight } from "react-bootstrap-icons";
import BlogDetail from "./BlogDetail";
import { useNavigate } from "react-router-dom";

function Blog() {
  const nav = useNavigate();

  return (
    <div className="container-fluid py-5 main-blog-bg">
      <div className="row position-relative  d-flex flex-column align-items-center">
        <div className="position-relative ourwork-header">
          <div className="benefit-underline-blog">
            <h6 className="benefit-blog">BLOGS</h6>
          </div>
        </div>
      </div>

      <div className="row blog-card-row mx-5">
        <div className="col-lg-4 col-md-4 col-sm-12 lower_cards card1_container">
          <div className="card px-3 shadow-sm card1-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">Latest</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                TMongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world.
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink " onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
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
                <g>
                  <g>
                    <path
                      d="M59.90398,68.02142h-8.62771v-43.76019c0,-0.52147 0.42419,-0.94565 0.94566,-0.94565h6.73639c0.52148,0 0.94566,0.42418 0.94566,0.94565zM38.12708,68.02142h-8.6277v-23.93341c0,-0.52147 0.42418,-0.94565 0.94566,-0.94565h6.73639c0.52134,0 0.94566,0.42418 0.94566,0.94565zM7.72249,68.02142v-12.39496c0,-0.52147 0.42418,-0.94565 0.94566,-0.94565h6.73639c0.52147,0 0.94566,0.42418 0.94566,0.94565v12.39496zM62.65218,68.02142v-43.76019c0,-2.03682 -1.65717,-3.69385 -3.69386,-3.69385h-6.73639c-2.03683,0 -3.69386,1.65715 -3.69386,3.69385v43.76019h-7.65265v-23.93341c0,-2.03683 -1.65702,-3.69386 -3.69386,-3.69386h-6.7364c-2.03683,0 -3.69386,1.65717 -3.69386,3.69386v23.93341h-7.65265v-12.39496c0,-2.03682 -1.65717,-3.69385 -3.69386,-3.69385h-6.73653c-2.03683,0 -3.69386,1.65715 -3.69386,3.69385v12.39496h-3.17637c-0.75892,0 -1.3741,0.61517 -1.3741,1.37408c0,0.75893 0.61519,1.37411 1.3741,1.37411h63.86795c0.75892,0 1.3741,-0.61519 1.3741,-1.37411c0,-0.75891 -0.61519,-1.37408 -1.37411,-1.37408z"
                      fill="#494c63"
                      fill-opacity="1"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M62.64896,1.86102c0.01924,-0.37499 -0.11266,-0.75631 -0.39903,-1.04267c-0.28636,-0.28636 -0.66766,-0.41841 -1.04266,-0.39904c-0.02213,-0.00096 -0.04398,-0.0033 -0.06651,-0.0033h-8.31331c-0.75893,0 -1.3741,0.61519 -1.3741,1.3741c0,0.75892 0.61517,1.3741 1.3741,1.3741h5.13322v0l-13.58394,13.58409v0l-5.12265,-5.12265c-0.25766,-0.25764 -0.60722,-0.40247 -0.97163,-0.40247c-0.36441,0 -0.71398,0.14483 -0.97163,0.40247l-24.70208,24.70222c-0.53659,0.53659 -0.53659,1.40667 0,1.94339c0.26836,0.26809 0.62,0.4022 0.97163,0.4022c0.35163,0 0.70341,-0.13411 0.97163,-0.40247l23.73045,-23.7306v0l5.12265,5.12265c0.53659,0.53659 1.40668,0.53659 1.94341,0l14.55556,-14.55544v0v4.64584c0,0.75892 0.61519,1.3741 1.37411,1.3741c0.75891,0 1.37408,-0.61518 1.37408,-1.3741v-7.82592c0,-0.0224 -0.00233,-0.04425 -0.0033,-0.06651z"
                      fill="#afb0b9"
                      fill-opacity="1"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mt-4 card2_container">
          <div className="card px-3 shadow-sm card2-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">2 days ago</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                MongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world. ing.
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink" onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
            </div>

            <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                className="zoom-out"
              >
                <g transform="translate(-3 -1)">
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M18.4,54.5  c1.2-1.2,2.2-2.6,2.8-4.2c0.8-0.6,1.4-1.3,1.8-2.2c0.2-1,0.3-1.9,0-2.9c0,0,1.2-3.6,0.7-4.6c-0.6-1-3-1.7-3-1.7  c-0.7-1.2-1.8-2-3.1-2.2c-1.6-0.1-2.8-1.4-2.8-3c0-2,2-5.1,2-5.1s2-1,2.3-1.7c0.2-0.8,0.3-1.6,0.4-2.4c0,0,1.9-3.4,0.8-5.4  c-0.3-0.6-2-1.1-2-1.1l-2.3-3.4"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M53.1,49.2  c-2.2-0.9-4.4-1.6-6.8-2.2c0,0-3.1-3.5-5.2-3.2c-1.6,0.5-3,1.4-4.2,2.6c0,0,0.1,4.3-0.5,4.5S34.1,50,33,50.9  c-1.1,0.9-0.5,3.3-0.5,3.3s-2.4,0.7-2.7,1.5s0.9,2.6,1.1,3.2"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M36.7,8.4  c-1.2-0.2-2.5-0.3-3.8-0.3C18.9,8.1,7.5,19.5,7.5,33.6C7.6,47.6,19,59,33,59c14.1,0,25.4-11.4,25.4-25.5c0-2.6-0.4-5.1-1.2-7.6"
                  ></path>
                  <line
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    x1="45.7"
                    y1="23.4"
                    x2="45.7"
                    y2="32.3"
                  ></line>
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="45.7"
                    cy="13.2"
                    r="10.2"
                  ></circle>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 lower_cards card3_container">
          <div className=" card px-3 shadow-sm card3-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">2 weeks ago</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                CompMongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world.
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink" onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
            </div>

            <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                className="zoom-out"
              >
                <g transform="translate(-2 -2)">
                  <path
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M49.3,39.1l4.9,4.5c3.1,2.8,3.3,7.6,0.5,10.7c-0.1,0.1-0.2,0.2-0.3,0.3l0,0c-2.9,3-7.7,3-10.7,0c-0.1-0.1-0.2-0.2-0.3-0.3l-6.7-7.4"
                  ></path>
                  <path
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M29.8,25.4l-8.9-8.9v-3.1L13.4,6L6,13.4l7.4,7.4h4.1l8.7,8.7"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M57.4,15.2l-7.1,7.1l-8.5-8.6l7.1-7.1c-1.6-0.5-3.4-0.7-5.1-0.6c-6.5,0.5-11.7,5.7-12.2,12.2c-0.1,1.7,0.1,3.4,0.6,5.1L7.2,45.8c-1.5,1.4-1.7,3.8-0.3,5.3c0,0,0.1,0.1,0.1,0.1l5.7,5.7c1.5,1.5,3.8,1.5,5.3,0c0,0,0.1-0.1,0.1-0.1l22.5-24.9c1.6,0.5,3.4,0.7,5.1,0.6c6.5-0.5,11.7-5.7,12.2-12.2C58.1,18.5,57.9,16.8,57.4,15.2z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="row blog-card-row mx-5">
        <div className="col-lg-4 col-md-3 col-sm-12 card5_container">
          <div className="card px-3 mt-lg-5 mt-sm-4 mt-xs-4 mt-md-4 card5-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">1 month ago</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                MongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world. accomplish.
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink" onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
            </div>

            <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 66 68"
                className="zoom-out"
              >
                <g transform="translate(1.486 1.261)">
                  <rect
                    data-name="Rectangle 1573"
                    width="12"
                    height="16"
                    transform="translate(-0.486 49.739)"
                    fill="none"
                    stroke="#494c63"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></rect>
                  <rect
                    data-name="Rectangle 1574"
                    width="11"
                    height="16"
                    transform="translate(26.514 49.739)"
                    fill="none"
                    stroke="#494c63"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></rect>
                  <rect
                    data-name="Rectangle 1575"
                    width="25"
                    height="16"
                    transform="translate(19.514 -0.261)"
                    fill="none"
                    stroke="#494c63"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></rect>
                  <rect
                    data-name="Rectangle 1576"
                    width="11"
                    height="16"
                    transform="translate(52.514 49.739)"
                    fill="none"
                    stroke="#494c63"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></rect>
                  <line
                    data-name="Line 953"
                    y2="18"
                    transform="translate(31.514 22.739)"
                    fill="none"
                    stroke="#afb0b9"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <path
                    data-name="Path 14707"
                    d="M9,41.06V32H61.093v9.06"
                    transform="translate(-3.338 -0.291)"
                    fill="none"
                    stroke="#afb0b9"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12 lower_cards2 card6_container">
          <div className="card px-3 shadow-sm card6-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">1 month ago</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                MongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world.
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink" onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
            </div>

            <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                className="zoom-out"
              >
                <g transform="translate(1 1)">
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M11.6,58v-3.9L1.4,42.2C0.5,41.2,0,39.8,0,38.5V20.8c0-1.9,1.5-3.4,3.4-3.4l0,0l0,0c1.9,0,3.4,1.5,3.4,3.4l0,0V32"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M23.2,58V44.9c0-1.5-0.6-3-1.7-4.1l-9.4-9.4c-1.3-1.3-3.5-1.3-4.8,0c0,0,0,0,0,0l0,0c-1.3,1.3-1.3,3.5,0,4.8c0,0,0,0,0,0l7.2,7.2"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M46.4,58v-3.9l10.2-11.9c0.9-1.1,1.4-2.4,1.4-3.8V20.8c0-1.9-1.5-3.4-3.4-3.4l0,0l0,0c-1.9,0-3.4,1.5-3.4,3.4l0,0V32"
                  ></path>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M34.8,58V44.9c0-1.5,0.6-3,1.7-4.1l9.4-9.4c1.3-1.3,3.5-1.3,4.8,0c0,0,0,0,0,0l0,0c1.3,1.3,1.3,3.5,0,4.8c0,0,0,0,0,0l-7.2,7.2"
                  ></path>
                  <line
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="14.5"
                    y1="14.5"
                    x2="43.5"
                    y2="14.5"
                  ></line>
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="29"
                    cy="14.5"
                    r="14.5"
                  ></circle>
                  <ellipse
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="29"
                    cy="14.5"
                    rx="6.2"
                    ry="14.5"
                  ></ellipse>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-3 col-sm-12 card7_container">
          <div className="card px-3 mt-lg-5 mt-sm-4 mt-xs-4 mt-md-4 card7-bg">
            <div className="card-body">
              <p className="card-title our_expertise pt-4 pb-2">2 months ago</p>
              <h4 className="card-subtitle mb-2 fw-bold pb-5 text_title">
                MongoDB Knowledge
              </h4>
              <p className="card-text mb-5 text">
                MongoDB is quickly becoming one of the most popular databases in
                the world.{" "}
              </p>
              <div className="blogreadmore move-right">
                <button className="bloglink" onClick={() => nav("/BlogDetail")}>
                  Read More
                </button>
                <ArrowRight color="black" size={20} />
              </div>
            </div>

            <div className="position-absolute top-0 end-0 p-2 m-3 rounded-circle bg-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                className="zoom-out"
              >
                <g transform="translate(1.024 1)">
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="29"
                    cy="54.1"
                    r="3.9"
                  ></circle>
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="14.5"
                    cy="50.3"
                    r="3.9"
                  ></circle>
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="29"
                    cy="37.7"
                    r="3.9"
                  ></circle>
                  <path
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    d="  M17.4,34.8C8.8,28.4,7.1,16.3,13.5,7.7S32-2.5,40.6,3.9s10.3,18.5,3.9,27.1c-1.1,1.5-2.4,2.8-3.9,3.9"
                  ></path>
                  <circle
                    fill="none"
                    stroke="#494c63"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="29"
                    cy="19.3"
                    r="8.7"
                  ></circle>
                  <line
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    x1="29"
                    y1="50.3"
                    x2="29"
                    y2="41.6"
                  ></line>
                  <path
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M14.5,46.4v-3.9l10.6-4.8"
                  ></path>
                  <circle
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    cx="43.5"
                    cy="50.3"
                    r="3.9"
                  ></circle>
                  <path
                    fill="none"
                    stroke="#afb0b9"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    d="M43.5,46.4v-3.9l-10.6-4.8"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
