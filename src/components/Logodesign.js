import React from "react";
import "./websitedev.css";
import { useNavigate } from "react-router-dom";
function Logodesign() {
  const navigate= useNavigate()
  const handleChange=()=>{
    navigate('/logo')
  }
  return (
    <div className="container-fluid">
      <div className="row py-5">
        <div className="subpage">
          <h1 className="text-center fw-bold ">
            Or customize<br></br> a template below
          </h1>
          <p className="text-center">
            Your business needs a visual identity--your logo. Hiring a
            professional designer to design your logo can be heavy on your
            pocket. LOGO.com uses one of the most advanced machine learning
            algorithms to generate thousands of professional-looking logos in
            minutes. All you have to do is enter your business name and get
            started.
          </p>

          <div class="container">
            <div class="gallery">
              <div class="gallery__item gallery__item--hor">
                <img src="https://logomakerr.ai/uploads/output/2024/02/22/4e0b3e2232bfeddb57757ad776a40ed3.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/18/ccdfe0d468f2b09284ec06a360072f6d.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/18/062ed0635fa5f81bfc1122ef59a5206f.jpg" />
              </div>
              <div class="gallery__item gallery__item--vert">
                <img src="https://logomakerr.ai/uploads/output/2024/02/16/381b8878dfa41b4c03ce7336659814b8.jpg" />
              </div>
              <div class="gallery__item gallery__item--lg">
                <img src="https://logomakerr.ai/uploads/output/2024/02/16/64711f8c1af8c9be69faa9c7b390d99d.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/16/8c24daf7842a78d043b8d2c63944144e.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/18/ce4c8e1a19b3759f47e75252e63ebe61.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logo.com/image-cdn/images/kts928pd/production/2948ad91525f9c01b82d467130b2e34c25026111-500x375.webp?w=1080&q=72" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/18/ce4c8e1a19b3759f47e75252e63ebe61.jpg" />
              </div>
              <div class="gallery__item">
                <img src="https://logomakerr.ai/uploads/output/2024/02/16/8c24daf7842a78d043b8d2c63944144e.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row px-5 mx-5 ">
        <div className="col-lg-6 col-md-6 col-sm-12 py-5">
          <h2>Customize your free logo</h2>
          <p className="py-3">
            Customers have described our logo editor as “fun”. Get access to
            premium fonts, hand-picked icons, and professional design layouts to
            customize your logo until you get a design you absolutely love.
          </p>
          <button className="btn btn-danger px-5">Get Your Free logo</button>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 py-5">
          <div class="colgallery cf">
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ccdfe0d468f2b09284ec06a360072f6d.jpg" />
            </div>
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ce4c8e1a19b3759f47e75252e63ebe61.jpg" />
            </div>
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ccdfe0d468f2b09284ec06a360072f6d.jpg" />
            </div>
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ce4c8e1a19b3759f47e75252e63ebe61.jpg" />
            </div>
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ccdfe0d468f2b09284ec06a360072f6d.jpg" />
            </div>
            <div>
            <img src="https://logomakerr.ai/uploads/output/2024/02/18/ce4c8e1a19b3759f47e75252e63ebe61.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="row logo-bg-section my-4 py-3">
        <div className="col-lg-6 col-md-6 col-sm-12 py-5 px-5 my-5">
          <h1> Building a brand starts here!</h1>
          <p>
            With hundreds of templates available with our AI logo generator, you
            can confidently launch, build and grow your business! And there's no
            need to worry about any design experience or to pay for a premium
            designer. Everything you need to build a brand is here!
          </p>
          <button className="btn btn-danger" onClick={handleChange} >Design Your Logo</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src="https://logo.com/image-cdn/images/kts928pd/production/9aa1654b9615416d989ef127f20e67b02ae225c6-800x604.webp?w=1080&q=72"
            style={{ width: "600px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Logodesign;
