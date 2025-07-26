import { useNavigate } from 'react-router-dom';
import React from "react";
import '../assets/style/style.css';
import  { useState } from 'react';

import { Link } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  // Dummy admin/user credentials
  const users = [
    { email: 'admin@hr.com', password: 'admin123', role: 'admin' },
    { email: 'employee@hr.com', password: 'employee123', role: 'employee' }
  ];

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // Save to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert(`✅ Welcome, ${user.role.toUpperCase()}!`);
      navigate('/'); // Redirect to dashboard or home
    } else {
      setError('❌ Invalid email or password!');
    }
  };


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
 <div className="container d-flex justify-content-center text-Align-start align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">🔐 AAPURTI Portal Login</h3>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label> Registered Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark w-100">
            🔓 Login
          </button>

          <p className="mt-3 text-muted text-center" style={{ fontSize: '14px' }}>
            Use <b>aapurti@hr.com / admin123</b> or <b>employee@hr.com / employee123</b>
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

export default Login;