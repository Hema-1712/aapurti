import React , { useState, useEffect }
from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';
import aimage from '../assets/images/abo.jpg';
const agriFeatures = [
  {
    title: 'Farmer Outreach',
    desc: 'Connect with farmers through SMS, WhatsApp, and field campaigns. Track engagement and improve reach.',
    color: '#34d399', // green
  },
  {
    title: 'Dealer Management',
    desc: 'Onboard, manage and support your agri dealers with real-time updates on pricing, stock, and leads.',
    color: '#3b82f6', // blue
  },
  {
    title: 'Inventory Tracking',
    desc: 'Monitor seeds, fertilizers, tools and machinery inventory across warehouses and distribution points.',
    color: '#f59e0b', // yellow
  },
  {
    title: 'Logistics & Delivery',
    desc: 'Ensure timely delivery of agri products with route optimization and shipment tracking tools.',
    color: '#8b5cf6', // violet
  },
];
function Lead() {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);
 
const [leads, setLeads] = useState([
    { id: 1, name: 'Raj Traders', contact: '9876543210', region: 'Nashik', status: 'New' },
    { id: 2, name: 'GreenGrow Seeds', contact: '9823456789', region: 'Pune', status: 'Contacted' },
  ]);
  const [newLead, setNewLead] = useState({ name: '', contact: '', region: '', status: 'New' });

  const handleChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value });
  };

  const addLead = (e) => {
    e.preventDefault();
    if (newLead.name && newLead.contact) {
      setLeads([...leads, { ...newLead, id: Date.now() }]);
      setNewLead({ name: '', contact: '', region: '', status: 'New' });
    } else {
      alert('Please fill in name and contact.');
    }
  };

  const deleteLead = (id) => {
    if (window.confirm('Are you sure to delete this lead?')) {
      setLeads(leads.filter((lead) => lead.id !== id));
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
    {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content shadow">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">🚜 Agri Starter Suite – 40% OFF!</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <p>
                  Grow your agri business smarter!  
                  With our Starter Suite, manage <strong>farmer leads</strong>, <strong>dealer contacts</strong>, 
                  <strong>inventory</strong>, and <strong>support requests</strong> — all in one CRM platform.
                </p>
                <p className="fw-bold text-success">Limited-time offer: Get 40% OFF!</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-dark" onClick={() => setShow(false)}>Upgrade Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
 



<div className="container mt-5">
    <div className="row">
        <div className="col-md-5">
            <img src={aimage} className="img-fluid" alt="aboutimage" loading="eager"/>
        </div>
        <div className="col-md-5">
         <h3>     Agri Business CRM Offer Text (40% Off)</h3>
         <h6>
🌾 Get 40% OFF the Agri Starter Suite!

Find more farmers and dealers, grow more partnerships, and manage relationships better with our all-in-one Agri CRM solution.

The Starter Suite brings Sales, Supply Chain, Support, and Field Engagement together — helping you scale your agri business efficiently with tools made for the rural market.
  🚜 Save 40% on Agri Starter Suite!
Reach more farmers and dealers. Manage leads, supply, and support with one simple CRM tool made for agri businesses.
  
    </h6>
      <button className="btn btn-primary ms-3">Upgrade Now</button>
   </div>
    </div>

</div>



  

  

      {/* Lead Section */}
      <div className="container my-4">
        <h2>📈 Lead Management</h2>

        {/* Add New Lead */}
        <div className="card p-4 mb-4 shadow-sm">
          <h5>Add New Lead</h5>
          <form onSubmit={addLead} className="row g-3 mt-2">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Lead Name"
                value={newLead.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                name="contact"
                placeholder="Contact Number"
                value={newLead.contact}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                name="region"
                placeholder="Region"
                value={newLead.region}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-success w-100" type="submit">Add Lead</button>
            </div>
          </form>
        </div>

        {/* Lead List */}
        <div className="card shadow-sm p-3">
          <h5>Lead List</h5>
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Region</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead, index) => (
                    <tr key={lead.id}>
                      <td>{index + 1}</td>
                      <td>{lead.name}</td>
                      <td>{lead.contact}</td>
                      <td>{lead.region}</td>
                      <td><span className={`badge bg-${lead.status === 'New' ? 'warning' : 'info'}`}>{lead.status}</span></td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteLead(lead.id)}
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>





    <div className="container my-5">
      <h2 className="text-center mb-4">🌾 Core Agri CRM Features</h2>
      <div className="row">
        {agriFeatures.map((item, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 p-3 hover-shadow">
              <div
                className="border-top rounded-top"
                style={{
                  height: '5px',
                  backgroundColor: item.color,
                  marginTop: '-1rem',
                  marginBottom: '1rem',
                }}
              />
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
              <a href="#" className="fw-bold text-dark text-decoration-underline">
                Learn more
              </a>
            </div>
          </div>
        ))}
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

export default Lead;
