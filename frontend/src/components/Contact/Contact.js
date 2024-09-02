import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="Contact-Container container-fluid">
      <div className="Contact-Sub-Container container">
        <div className="Contact-heading">
          <h1 className="Contact-heading Contact-heading-1">Nateisha Foster</h1>
          <h6 className="Contact-heading Contact-heading-6">
            With me, you will receive all the real estate services you need and
            even more because I will act as a guide for you to the world of big
            money in the Middle East business capital.
          </h6>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="Contact-card card h-100">
              <div className="Contact-card-body card-body">
                <h5 className="Contact-card-title card-title">Get in touch</h5>
                <span className="Contact-icons">
                  {/* Instagram Link */}
                  <a 
                    href="https://www.instagram.com/nateishatherealtor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
                  </a>
                  {/* WhatsApp Link */}
                  <a 
                    href="https://wa.me/+971585086191" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                  </a>
                </span>
                <span className="Contact-info">
                  <a 
                    href="https://wa.me/+971585086191" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} /> 
                    +971 58 508 6191
                  </a>
                </span>
                <span className="Contact-info">
                  <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />{" "}
                  foster@monet.ae
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Contact-card card h-100">
              <div className="Contact-card-body card-body">
                <ul className="Contact-card-ul">
                  <li className="Contact-card-li">
                    Assistance in buying, selling, or renting
                  </li>
                  <li className="Contact-card-li">
                    Consulting in commercial and residential real estate
                  </li>
                  <li className="Contact-card-li">
                    Assistance in obtaining a resident visa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Contact-card card h-100">
              <div className="Contact-card-body card-body">
                <ul className="Contact-card-ul">
                  <li className="Contact-card-li">From $ 250.000</li>
                  <li className="Contact-card-li">
                    50+ residential complexes
                  </li>
                  <li className="Contact-card-li">
                    Contracts Top real estate developers in the UAE
                  </li>
                  <li className="Contact-card-li">
                    Apartments, condos, villas and townhouses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
