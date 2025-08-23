import React from "react";
import "./Footer.css"; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="footer-content">
        
        <p>
          📞 <strong>Helpline: 1930</strong> (24x7)
        </p>
        <p>
          🌐{" "}
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Online at cybercrime.gov.in
          </a>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
