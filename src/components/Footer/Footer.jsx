import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>PerCAA 2026</h3>
          <p>
            International Symposium on Pervasive Computing Advances and Applications (PerCAA 2026),
            hosted by Poornima College of Engineering, Jaipur.
          </p>
        </div>

        {/* Contact Section */}
<div className="footer-section contact order-contact">
  <h4>Contact Us</h4>

  <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '5px' }}>
  <span style={{ display: 'flex', alignItems: 'center' }}>
    <FaPhone style={{ marginRight: '8px' , color:'white'}} />
    <a href="tel:+919413069023" style={{ color: 'white', textDecoration: 'none' }}>
      +91 9413069023,
    </a><span style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
    <a href="tel:+919897257571" style={{ color: 'white', textDecoration: 'none' }}>+91 9897257571,
    </a>
  </span>
  </span>
  <span style={{ display: 'flex', alignItems: 'center', marginLeft: '24px' }}>
    <a href="tel:+919509885411" style={{ color: 'white', textDecoration: 'none' }}>
      +91 9509885411
    </a>
  </span>
</p>


   <p>
    <a href="mailto:percaa2025@poornima.org" style={{ color: 'inherit', textDecoration: 'none' }}>
      <FaEnvelope  style={{marginTop:'4px', marginRight:'8px'}}/> percaa2025@poornima.org
    </a>
  </p>

  <p>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <FaMapMarkerAlt style={{ marginTop: '4px', marginRight: '8px' }} />
  <a
    href="https://www.google.com/maps?q=Poornima+College+of+Engineering,+Jaipur,+Rajasthan"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: 'white', textDecoration: 'none', lineHeight: '1.5' }}
  >
    Poornima College of Engineering,<br />
    Jaipur, Rajasthan
  </a>
</div>

  </p>

  <div className="social-icons">
    <a href="https://www.facebook.com/Poornima.College.Engineering/"><FaFacebook /></a>
    <a href="https://twitter.com/poornimacollege"><FaTwitter /></a>
    <a href="https://www.instagram.com/poornimacollege?igsh=MTVzeDQ4ZmF6anoxNQ=="><FaInstagram /></a>
    <a href="https://www.linkedin.com/school/poornima-college-of-engineering-jaipur/"><FaLinkedin /></a>
  </div>
</div>


        {/* Quick Links */}
        <div className="footer-section links order-links">
          <h4 className="quick-links-heading">Quick Links</h4>
          <div className="quick-links-container">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/callForPaper">Call for Papers</a></li>
              <li><a href="/author-guidelines">Author Guidelines</a></li>
              <li><a href="/important-dates">Important Dates</a></li>
              <li><a href="/organizing-committee">Organizing Committee</a></li>
              <li><a href="/technical-committee">Technical Program Committee</a></li>
              <li><a href="/local-organizing-comittee">Local Organizing Committee</a></li>
            </ul>
            <ul>
              <li><a href="/registration">Registration</a></li>
              <li><a href="/speakers">Keynotes & Session Chairs</a></li>
              <li><a href="/percaa-2024">PerCAA-2024</a></li>
              <li><a href="/percaa-2020">PerCAA-2020</a></li>
              <li><a href="/venue">Venue</a></li>
              <li><a href="/local-attractions">Local Attractions</a></li>
              <li><a href="/publication">Publication</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Poornima College of Engineering | Designed & Developed by Team PerCAA</p>
        <p class='bottom'>
          <FaGlobe />{" "}
          <a href="https://percaa.poornima.org" target="_blank" rel="noopener noreferrer">
            percaa.poornima.org
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
