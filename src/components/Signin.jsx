import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';

function Signin() {

 
    
 

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
 
      
      <div className=".signin-wrapper
       d-flex justify-content-center align-items-center mt-5" >
        <div className="signin-container">
          <form className="signin-form">
            <h2 className="text-center text-black mt-4 mb-4">AAPURTI PORTAL</h2>

            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your First Name" required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your Last Name" required />

            <label htmlFor="email">Mobile Number</label>
            <input type="tel" id="email" placeholder="Enter your Mobile Number" required/>
               
           <label htmlFor="email">Insurance Company Name</label>
            <select
                name="type"
                className="form-select"
               
                required
              >
                <option value="">Select Insurance Company</option>
                <option>Sbi General Insurance</option>
                <option>Icici Lombard Insurance</option>
                <option>Future General Insurance</option>
                <option>Hdfc Ergo General Insurance</option>
                <option>Bajaj General Insurance</option>

              </select>
           <label htmlFor="email">Role</label>
          
            <select
                name="type"
                className="form-select"
               
                required
              >
                <option value="">Select Role</option>
                <option>Offrole</option>
                <option>Onrole</option>
                

              </select>
              <label htmlFor="email">Mail Id</label>
            <input type="email" id="email" placeholder="Enter your Mail Id" required/>
            <label htmlFor="email">Password</label>
            <input type="password" id="email" placeholder="Enter your Password" required/>
             <button type="submit" className="btn btn-dark
              mt-3">SUBMIT FORM
              </button> 
                <button type="submit" className="btn btn-dark
              mt-3">RESET
              </button> 
                            <Link to="/login" className="btn btn-primary my-3
                            ">LOG IN</Link>

          

           
            <p>
                By submitting this form, you agree to receive promotional messages from aapurti agro business about its products and services. You can unsubscribe at any time by clicking on the link at the bottom of our emails.
            </p>
          </form>
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

export default Signin;
