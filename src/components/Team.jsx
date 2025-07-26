import React ,
{useState,useEffect}
from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';
import {
  FaSeedling, FaChartLine, FaCogs,
  FaChartPie, FaMobileAlt, FaComments
} from "react-icons/fa";

const teamData = [
  {
    name: "Raja Kumar",
    role: "Senior Agronomist",
    department: "Field Research",
    photo: "https://www.freepik.com/premium-ai-image/hyper-realistic-happiest-indian-handsome-man-chex-shirt-hands-up-isolated-yellow-background_170103110.htm#fromView=search&page=1&position=5&uuid=5f312a92-f0fb-47be-ac47-228983a6f06f&query=persons"
  },
  {
    name: "Meena Sharma",
    role: "Vendor Manager",
    department: "Procurement",
    photo:" https://www.freepik.com/premium-ai-image/free-photo-beautiful-female-halflength-portrait-isolated-young-emotional-indian-woman-dress_160018367.htm#fromView=search&page=1&position=0&uuid=7ff2ce76-a881-445b-bb1d-5a47fb16c5fe&query=persons"
  },
  {
    name: "Suresh Babu",
    role: "Logistics Officer",
    department: "Supply Chain",
    photo: "https://www.freepik.com/premium-ai-image/hyper-realistic-happiest-indian-handsome-man-chex-shirt-hands-up-isolated-yellow-background_170103333.htm#fromView=search&page=1&position=25&uuid=7ff2ce76-a881-445b-bb1d-5a47fb16c5fe&query=persons"
  },
  {
    name: "Anita Reddy",
    role: "CRM Specialist",
    department: "Customer Relations",
    photo: "https://www.freepik.com/premium-photo/businesswomen-high-quality-image_251409231.htm#from_element=cross_selling__photo"
  },
];

function Team() {
  const features = [
    {
      icon: <FaSeedling size={40} className="text-success mb-3" />,
      title: "Lead Management",
      description: "Effortlessly track farmers, vendors, and inquiries with smart lead tools and insights.",
    },
    {
      icon: <FaChartLine size={40} className="text-warning mb-3" />,
      title: "Sales Forecasting",
      description: "Predict seasonal crop demand with AI-powered forecasting for smarter inventory planning.",
    },
    {
      icon: <FaCogs size={40} className="text-info mb-3" />,
      title: "Workflow Automation",
      description: "Automate dispatches, reminders, and confirmations to enhance field productivity.",
    },
    {
      icon: <FaChartPie size={40} className="text-primary mb-3" />,
      title: "Analytics Dashboard",
      description: "Visualize crop cycles, vendor orders, and revenue with insightful dashboards.",
    },
    {
      icon: <FaComments size={40} className="text-danger mb-3" />,
      title: "Multi-Channel Support",
      description: "Engage farmers and distributors via SMS, WhatsApp, and regional-language emails.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-success mb-3" />,
      title: "Mobile Access",
      description: "Access your CRM in the field with offline sync and mobile app support.",
    },
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

      {/* CRM Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">🌿 Aapurti Agri Business Features</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm text-center p-4">
                {feature.icon}
                <h5 className="mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">🌿 Meet Our Agri Business Team</h2>
        <div className="row">
          {teamData.map((member, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="card text-center shadow-sm p-3 h-100">
               
                <h5>{member.name}</h5>
                <p className="text-muted mb-1">{member.role}</p>
                <span className="badge bg-success">{member.department}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default Team;
