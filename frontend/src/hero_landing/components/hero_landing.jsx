import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { role_data } from '../constants/role_data';
import './hero_landing.css';

const HeroLanding = () => {
  const navigate = useNavigate();
  const [active_tab, set_active_tab] = useState(role_data[0].id);
  const active_role = role_data.find(role => role.id === active_tab);

  return (
    <div className="av-wrapper">
      
      {/* 1. Navbar */}
      <header className="av-nav">
        <div className="av-logo">Avyxis</div>
        <nav className="av-nav-links">
          <a href="#!">Architecture</a>
          <a href="#!">Ecosystem</a>
          <a href="#!">Entity RBAC</a>
        </nav>
        <button className="av-nav-btn" onClick={() => navigate('/root/login')}>System Login</button>
      </header>

      {/* 2. Hero Split */}
      <section className="av-hero">
        <div className="av-hero-left">
          <div className="av-hero-content">
            <span className="av-label">Platform Version 2.0</span>
            <h1><span>Systematize</span> Your Workforce Workflows.</h1>
            <p>
              Avyxis delivers a precision-engineered ecosystem integrating Administration, Payroll, and Attendance through absolute role-based access logic. 
            </p>
            <div className="av-hero-actions">
              <button className="av-btn-primary" onClick={() => navigate('/root/login')}>Initialize Access</button>
              <button className="av-btn-outline">Read Documentation</button>
            </div>
          </div>
        </div>
        <div className="av-hero-right">
          <div className="av-mockup">
            <div className="av-mock-header">
              <div className="av-mock-dot"></div>
              <div className="av-mock-dot"></div>
              <div className="av-mock-dot"></div>
            </div>
            <div className="av-mock-body">
              <div className="av-mock-side">
                <div className="av-mock-side-item" style={{width: '100%'}}></div>
                <div className="av-mock-side-item" style={{width: '80%'}}></div>
                <div className="av-mock-side-item" style={{width: '60%'}}></div>
              </div>
              <div className="av-mock-main">
                <div className="av-mock-card" style={{height: '60px', flex: 'none'}}></div>
                <div style={{display: 'flex', gap: '8px', flex: 1}}>
                  <div className="av-mock-card"></div>
                  <div className="av-mock-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Philosophy (Dark) */}
      <section className="av-section-dark">
        <div className="av-section-heading">
          <h2>Core Architecture</h2>
          <p>The structural advantage of fixed access layers and permission scaling.</p>
        </div>
        <div className="av-grid-4">
          <div className="av-feature-card">
             <i className="fa-solid fa-lock"></i>
             <h3>Rigid Roles</h3>
             <p>Roles are immutable by design, establishing secure internal boundaries.</p>
          </div>
          <div className="av-feature-card">
             <i className="fa-solid fa-bars-staggered"></i>
             <h3>Fixed Menus</h3>
             <p>Standardized workflows mean predictable logic across enterprise instances.</p>
          </div>
          <div className="av-feature-card">
             <i className="fa-solid fa-eye-slash"></i>
             <h3>Dynamic Visibility</h3>
             <p>Interface state conditionally reacts to the authenticated role context immediately.</p>
          </div>
          <div className="av-feature-card">
             <i className="fa-solid fa-diagram-project"></i>
             <h3>Role Mapping</h3>
             <p>Company Admins explicitly manage localized enabled features dynamically.</p>
          </div>
        </div>
      </section>

      {/* 4. Split Info Sections */}
      <section className="av-split-section">
        <div className="av-split-light">
           <span className="av-label">Financial Component</span>
           <h2>Unified Payroll Engine</h2>
           <p>Automate salary processing, manage multi-tier advances, and orchestrate strict fine penalties. Your entire financial outflow is documented and structurally audited down to the individual employee payslip format.</p>
        </div>
        <div className="av-split-dark">
           <span className="av-label">Human Capital</span>
           <h2>Extensible HR Logistics</h2>
           <p>From complex shift-request loops to automated daily attendance logs, Avyxis systematizes human behavior. Manage leaves, exit formalities, gate passes, and complete employee lifecycle states natively.</p>
        </div>
      </section>

      {/* 5. Capability Matrix (Role Tabs) */}
      <section className="av-roles-section">
        <div className="av-roles-sidebar">
          <div className="av-sidebar-title">Entities Index</div>
          {role_data.map(role => (
            <button 
              key={role.id}
              className={`av-role-btn ${active_tab === role.id ? 'active' : ''}`}
              onClick={() => set_active_tab(role.id)}
            >
              <span className="av-role-name">{role.name}</span>
              <span className="av-role-sub">{role.sub}</span>
            </button>
          ))}
        </div>
        <div className="av-roles-content">
          <div className="av-roles-header">
            <h2>{active_role.name} Capability</h2>
            <p>{active_role.desc}</p>
          </div>
          <div className="av-capability-grid">
            {active_role.sections.map((sec, idx) => (
              <div key={idx} className="av-cap-card">
                <h4>{sec.title}</h4>
                <ul className="av-cap-list">
                  {sec.items.map((item, idxi) => (
                    <li key={idxi}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer Base */}
      <footer className="av-footer">
        <div className="av-footer-top">
           <div className="av-footer-brand">
             <div className="av-logo">Avyxis</div>
             <p>Enterprise workforce and structural resource planning.</p>
           </div>
           <div className="av-footer-links-grid">
             <div className="av-link-col">
               <strong>Platform</strong>
               <a href="#!">Super Admin Access</a>
               <a href="#!">Company Dashboard</a>
               <a href="#!">HR Modular Scale</a>
             </div>
             <div className="av-link-col">
               <strong>Documentation</strong>
               <a href="#!">API Endpoints</a>
               <a href="#!">Integration Hub</a>
               <a href="#!">Architecture Repo</a>
             </div>
             <div className="av-link-col">
               <strong>Legal</strong>
               <a href="#!">Terms of Operations</a>
               <a href="#!">Privacy Protocol</a>
               <a href="#!">Service Level Agreement</a>
             </div>
           </div>
        </div>
        <div className="av-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Avyxis Networks. Strict Copyright Enforcement.</span>
          <span>Build version 2.4.9</span>
        </div>
      </footer>

    </div>
  );
};

export default HeroLanding;
