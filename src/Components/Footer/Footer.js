import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footerBanner">
        <div className="footrImage">
          <img src="../../../Images/footer_img.webp"></img>
        </div>
        <div className="footerTittle">
          <h2>TRY THE OLX APP</h2>

          <h5>
            Buy, sell and find just about anything using the app on your mobile.
          </h5>
        </div>
        <div className="appDownload">
          <h3>GET YOUR APP TODAY</h3>
          <div>
            <img src="../../../Images/appstore_2x.webp"></img>
            <img src="../../../Images/playstore_2x.webp"></img>
          </div>
        </div>
      </div>
      <div className="footerParentDiv">
        <div className="content">
          <div>
            <div className="heading">
              <p>POPULAR LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>TRENDING LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>Bhubaneshwarp</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>ABOUT US</p>
            </div>
            <div className="list">
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>OLX</p>
            </div>
            <div className="list">
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Other Countries Pakistan - South Africa - Indonesia</p>
          <p>Free Classifieds in India. © 2006-2021 OLX</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
