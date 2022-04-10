import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="absolute"></div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link to="/Login" className="footer-link">Toyota</Link>
                  </li>
                  <li>
                    <Link to="/Login" className="footer-link">Kia</Link>
                  </li>
                  <li>
                    <Link to="/Login" className="footer-link">Subaru</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <Link to="/Profile" className="footer-link2">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Team" className="footer-link2">Team</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Recall.it</h3>
                <p>
                  Random words about our company, Random words about our
                  company, Random words about our company, Random words about
                  our company.
                </p>
              </div>
              {/* <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
             </div> */}
              <p className="copyright">Recall.it © 2022</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
