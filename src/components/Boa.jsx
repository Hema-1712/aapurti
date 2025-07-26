import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';
import { FaSeedling, FaTruckMoving, FaHandsHelping } from "react-icons/fa";

function Boa() {
  // Hardcoded data that was previously in DashboardContext
  const user = { name: "Raja", role: "Admin", region: "North Zone" };

  const stats = {
    totalFarmers: 1200,
    ordersDelivered: 450,
    activeDealers: 32,
    inventory: 280,
  };

  const announcements = [
    "🌱 New vendor registration portal live!",
    "🚜 Delivery delays due to weather conditions.",
  ];

  const recentActivity = [
    "👨‍🌾 Farmer Ram placed an order",
    "🚛 Order #2453 delivered",
    "💬 Vendor feedback received",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: 'blue' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">AAPURTI AGRI BUSINESS</Link>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav">
              <li className="nav-item mx-2"><Link to="/" className="nav-link text-white">DASHBOARD</Link></li>
              <li className="nav-item mx-2"><Link to="/lead" className="nav-link text-white">LEAD MANAGEMENT</Link></li>
              <li className="nav-item mx-2"><Link to="/about" className="nav-link text-white">ABOUT</Link></li>
              <li className="nav-item mx-2"><Link to="/team" className="nav-link text-white">TEAM MANAGEMENT</Link></li>
              <li className="nav-item mx-2"><Link to="/report" className="nav-link text-white">REPORT</Link></li>
              <li className="nav-item mx-2"><Link to="/signin" className="nav-link text-white">REGISTER</Link></li>
              <li className="nav-item mx-2"><Link to="/login" className="nav-link text-white">LOG IN</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Stats */}
      <div className="container my-4">
        <h2>👋 Welcome back, {user.name}</h2>
        <p className="text-muted">Role: {user.role} | Region: {user.region}</p>

        <div className="row g-4 text-center mt-4">
          <div className="col-md-3 col-sm-6"><div className="card shadow-sm p-3"><h3>👨‍🌾</h3><h5>{stats.totalFarmers}</h5><p>Total Farmers</p></div></div>
          <div className="col-md-3 col-sm-6"><div className="card shadow-sm p-3"><h3>🛒</h3><h5>{stats.ordersDelivered}</h5><p>Orders Delivered</p></div></div>
          <div className="col-md-3 col-sm-6"><div className="card shadow-sm p-3"><h3>🚚</h3><h5>{stats.activeDealers}</h5><p>Active Dealers</p></div></div>
          <div className="col-md-3 col-sm-6"><div className="card shadow-sm p-3"><h3>🌾</h3><h5>{stats.inventory}</h5><p>Current Inventory</p></div></div>
        </div>

        {/* Announcements & Quick Actions */}
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-4">
              <h4>📢 Announcements</h4>
              {announcements.map((note, i) => (<h6 key={i}>{note}</h6>))}
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm p-4">
              <h4>⚡ Quick Actions</h4>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success">Add New Dealer</button>
                <button className="btn btn-primary">Add Inventory</button>
                <button className="btn btn-warning">Generate Report</button>
                <button className="btn btn-secondary">View Complaints</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card shadow-sm p-4 mb-5">
          <h5>📋 Recent Activity</h5>
          {recentActivity.map((activity, i) => (<h6 key={i}>{activity}</h6>))}
        </div>
      </div>

      {/* Vendor Features Section */}
      <div className="py-5 text-white agri-gradient">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-black"
          >🌾 Vendor-Friendly CRM Features</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card-agri bg-primary
            border-0 shadow-sm rounded-4 p-4 h-100">
                <FaHandsHelping size={40} className="mb-3 text-white" />
                <h5 className="fw-bold">Vendor Onboarding</h5>
                <p>Easy registration, verification & access to purchase requests.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-agri bg-primary
              border-0 shadow-sm rounded-4 p-4 h-100">
                <FaSeedling size={40} className="mb-3 text-white" />
                <h5 className="fw-bold">Product Listing</h5>
                <p>Add seeds, fertilizers, tools & pricing with real-time inventory sync.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card-agri bg-primary border-0 shadow-sm rounded-4 p-4 h-100">
                <FaTruckMoving size={40} className="mb-3 text-white" />
                <h5 className="fw-bold">Order & Delivery</h5>
                <p>Track orders, logistics, payments & delivery status seamlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default Boa;