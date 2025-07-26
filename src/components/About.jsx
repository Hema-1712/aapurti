import React from "react";
import '../assets/style/abo.css';
import { Link } from 'react-router-dom';

function About() {

 
    
 

  return (
    <>
      
        <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: 'blue'}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">AAPURTI AGRI BUSINESS</Link>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link text-white">DASHBOARD</Link>
            </li>
            
         <li className="nav-item mx-2">
                      <Link to="/lead"  className="nav-link text-white">LEAD MANAGEMENT</Link>
                    </li>
         <li className="nav-item mx-2">
              <Link to="/about" className="nav-link text-white">ABOUT</Link>
            </li>
           
            <li className="nav-item mx-2">
              <Link to="/team" className="nav-link text-white">TEAM MANAGMENT</Link>
            </li>
             <li className="nav-item mx-2">
              <Link to="/report" className="nav-link text-white">REPORT</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/signin" className="nav-link text-white">REGISTER</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/login" className="nav-link text-white">LOG IN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container mt-5">
        <div className="row" style={{gap:'100px'}}>
<div className="col-md-4">
  <h3>
  🌾 About Aapurti Agri Business</h3>
  <h6>
Aapurti Agri Business is dedicated to transforming the agricultural supply chain by connecting farmers, retailers, and agri-entrepreneurs through efficient and innovative solutions. We specialize in delivering high-quality agri-inputs, farming tools, and advisory services that empower rural India and support sustainable agriculture.
</h6>
</div>
<div className="col-md-4">
  <h3>
    🌱 Our Mission
  </h3>
  <h6>
    To ensure timely availability (Aapurti) of essential agricultural resources to farmers and agri-dealers, while promoting productivity, transparency, and rural prosperity.

  </h6>
</div>
<div className="col-md-4">
<h3>
🚜 What We Offer</h3>
<h6>
Agri-Inputs: Certified seeds, fertilizers, and crop protection solutions.<br/>

Farm Machinery & Tools: Access to modern equipment and tools to improve farm efficiency.<br/>

Digital Advisory: Weather alerts, crop care tips, and market price updates via mobile platforms.<br/>

Farmer Support: On-ground assistance through trained agri-professionals and village-level entrepreneurs.<br/>

Supply Chain Integration: End-to-end logistics and inventory tracking for timely delivery.</h6>
</div>
<div className="col-md-4">
  <h3>
    🌍 Our Vision
  </h3>
  <h6>
    To build a robust agri-ecosystem that empowers farmers, strengthens rural livelihoods, and ensures food security through smart, scalable, and sustainable solutions.

  </h6>
</div>
        </div>
    </div>

<div className="container mt-5">
  <h4>
    📞 Contact Us<br/>
We’re here to help! Whether you're a farmer, dealer, partner, or agri-entrepreneur, feel free to reach out for assistance, queries, or collaborations.
  </h4>
  <div className="row mt-5">
    <div className="col-md-3 mt-3">
      <h4>
🏢 Office Address:

      </h4>
      <h6>
        Aapurti Agri Business Pvt. Ltd.
123 Greenfield Avenue,
AgriTech Park, Pune - 411001, Maharashtra, India
      </h6>
    </div>
    <div className="col-md-3 mt-3">
   <h4> Phone:</h4>
   <h6>
    📞 +91-98765-43210<br/>
📞 +91-91234-56789
   </h6>

    </div>
  
 <div className="col-md-3 mt-3">
   <h4>   📧 Email:</h4>

   <h6>
✉️ support@aapurtiagri.com
✉️ info@aapurtiagri.com
   </h6>

    </div>

    <div className="col-md-3 mt-3">
   <h4>🕒 Office Hours:</h4>


   <h6>
🕘 Monday to Saturday
🕓 9:00 AM – 6:00 PM IST
   </h6>

    </div>

     <div className="col-md-3 mt-3">
   <h4>📲 Follow Us:
</h4>


   <h6>
Facebook

Instagram

LinkedIn

WhatsApp Busines
   </h6>

    </div>
  </div>
</div>
 <footer>
                    <div className="footer-content p-4 d-flex justify-content-around flex-wrap">
                        <div className="footer-links">
                            <h3>AAPURTI AGRI BUSINESS</h3>
                            <ul>
                                <li><a href="#">Dashboard</a></li>
                                  <li><a href="#">Lead Management</a></li>
                                <li><a href="#">Team Management</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Report</a></li>
                                <li><a href="#">Service Status</a></li>

                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>SUPPORT</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Hire a Partner</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Legal</a></li>

                            </ul>
                        </div>
                        <div className="footer-links">
                            <h3>DEVELOPERS</h3>
                            <ul>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>

                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                       </div>

                    
                    <div className="footer-bottom">
         <div className="icons">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-pinterest"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
        </div>
           <p>AAPURTI AGRI BUSINESS &copy; 2025 All rights reserved.</p>
           </div>
      </footer>
      </>
  );
}

export default About;
