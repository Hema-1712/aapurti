import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Farmers', 'Dealers', 'Orders'],
  datasets: [
    {
      label: 'Total Entities',
      data: [1200, 32, 450],
      backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      borderColor: ['#388e3c', '#1976d2', '#f57c00'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const pricingPlans = [
  {
    title: "Starter",
    price: "$29/mo",
    features: [
      "Up to 500 Farmer Contacts",
      "Basic Support",
      "Inventory Tracking",
      "Farm Input Catalog Access"
    ],
    button: "Get Started",
    color: "primary"
  },
  {
    title: "Pro",
    price: "$59/mo",
    features: [
      "5,000 Farmer Contacts",
      "Priority Support",
      "Order & Supply Management",
      "Advanced Crop Advisory"
    ],
    button: "Choose Pro",
    color: "success"
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: [
      "Unlimited Contacts",
      "Dedicated Relationship Manager",
      "Custom API Integration",
      "Full Analytics & Reports"
    ],
    button: "Contact Us",
    color: "dark"
  }
];

const Report = () => {
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

      {/* Pricing Plans */}
      <section className="container my-5 text-center">
        <h2 className="mb-5 fw-bold">🌾 Choose Your Plan</h2>
        <div className="row justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="fw-bold mb-2">{plan.title}</h4>
                  <h3 className="text-primary fw-bold mb-3">{plan.price}</h3>
                  <ul className="list-unstyled text-start px-4 mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="mb-2">✓ {feature}</li>
                    ))}
                  </ul>
                  <button className={`btn btn-${plan.color} px-4`}>{plan.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doughnut Chart */}
      <div className="container my-5">
        <h4 className="text-center mb-3">📊 Dashboard Summary</h4>
        <div className="card p-4 shadow-sm">
          <Doughnut data={data} options={options} />
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
};

export default Report;
