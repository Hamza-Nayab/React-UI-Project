import React from "react";
import "./Contactme.css";
import pic from "../../images/dubaiImg.jpg";

export default function Contactme() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#EFEBE9" }}>
      <div className="row align-items-center" style={{ maxHeight: "80vh" }}>
        
        <div className="col-md-12">
          <form>
            <div className="text-center mb-4">
              <img
                src={pic} /* Replace with the actual path */
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "180px", height: "180px" }}
              />
            </div>

            <h3 className="text-center">
              Nateisha Foster
              <div></div>
              <small className="d-block text-muted">
                Sr. Investment Consultant
              </small>
            </h3>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="Number"
                placeholder="Number"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Budget"
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Message(Optional)"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
