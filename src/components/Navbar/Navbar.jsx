import { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
// import IET_logo from '/logos/IET_logo.jpg'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="toggle-button" onClick={handleToggle}>
        {toggle ? <IoMdClose className="cross"/> : <GiHamburgerMenu />}
      </div>
      <nav id="mainav" className={`navbar ${toggle ? "toggleActive" : ""}`}>
        <ul className="clear">
          <li className="active"><Link onClick={handleToggle} to={"/"}>Home</Link></li>
          <li>
            <a to="#">Announcement</a>
            <ul>
              <li onClick={handleToggle}><Link to={'/callForPaper'}>Call for Papers</Link></li>
              <li onClick={handleToggle}><Link to={'/author-guidelines'}>Author Guidelines</Link></li>
              <li onClick={handleToggle}><Link to={'/important-dates'}>Important Dates</Link></li>
            </ul>
          </li>
          <li>
            <a to="#">Organizing Committee</a>
            <ul>
              <li><Link onClick={handleToggle} to={'/organizing-committee'}>Organizing Committee</Link></li>
              <li><Link onClick={handleToggle} to={'/technical-committee'}>Technical Program Committee</Link></li>
              <li><Link onClick={handleToggle} to={'/local-organizing-comittee'}>Local Organizing Committee</Link></li>
            </ul>
          </li>
          <li>
            <a to="#">Program/Registration</a>
            <ul>
              <li><Link onClick={handleToggle} to={'/registration'}>Registration</Link></li>
              <li><Link onClick={handleToggle} to={'/speakers'}>Keynotes & Session Chairs</Link></li>
            </ul>
          </li>
          <li>
  <a href="#">Lecture Series</a>
  <ul className="dropdown">

    {/* ===== Track 1 ===== */}
    <li>
      <a href="#">Track 1 ▸</a>
      <ul className="sub-dropdown">
        <li><Link to="">Ambient Intelligence</Link></li>
        <li><Link to="">Speech and Image Processing</Link></li>
        <li><Link to="">Energy-Efficient Pervasive Computing</Link></li>
        <li><Link to="">Context Aware Systems</Link></li>
        <li><Link to="">Stress / Emotional Response Analysis</Link></li>
        <li><Link to="">Machine Learning in Pervasive Computing</Link></li>
        <li><Link to="">Context Modeling and Reasoning</Link></li>
        <li><Link to="">Internet of Things / Cyber Physical Systems</Link></li>
        <li><Link to="">Human Computer Interaction</Link></li>
        <li><Link to="">Augmented Reality</Link></li>
        <li><Link to="">Wearable Computing</Link></li>
        <li><Link to="">Smart Homes</Link></li>
        <li><Link to="">Security and Privacy</Link></li>
        <li><Link to="">Pervasive Healthcare Systems</Link></li>
        <li><Link to="">Smart Vehicles</Link></li>
      </ul>
    </li>

    {/* ===== Track 2 ===== */}
    <li>
      <a href="#">Track 2 ▸</a>
      <ul className="sub-dropdown">
        <li><Link to="">Mobile Communication</Link></li>
        <li><Link to="">Wireless Sensor Networks</Link></li>
        <li><Link to="">Software Defined Networking</Link></li>
        <li><Link to="">Body Sensor Networks</Link></li>
        <li><Link to="">Adaptive Communication Protocols</Link></li>
        <li><Link to="">Vehicular Networks</Link></li>
        <li><Link to="">Intelligent Transportation Systems</Link></li>
        <li><Link to="">Delay Tolerant Networks</Link></li>
        <li><Link to="">Near Field Communication</Link></li>
      </ul>
    </li>

    {/* ===== Track 3 ===== */}
    <li>
      <a href="#">Track 3 ▸</a>
      <ul className="sub-dropdown">
        <li><Link to="">Healthcare Robotics</Link></li>
        <li><Link to="">Assistive Technologies</Link></li>
        <li><Link to="">Robotic Rehabilitation</Link></li>
        <li><Link to="">Surgical Robotics</Link></li>
        <li><Link to="">AI-based Diagnostics</Link></li>
        <li><Link to="">Remote Monitoring Systems</Link></li>
      </ul>
    </li>

  </ul>
</li>

          <li>
            <a to="#">Archive</a>
            <ul>
              <li><Link onClick={handleToggle} to={'/PerCAA-2024'}>PerCAA-2024</Link></li>
              <li><Link onClick={handleToggle} to={'/PerCAA-2020'}>PerCAA-2020</Link></li>
            </ul>
          </li>
          <li>
            <a to="#">Information</a>
            <ul>
              <li><Link onClick={handleToggle} to={'/venue'}>Venue</Link></li>
              {/* <li><a to="How_to_reach.html">How to Reach</a></li> */}
              <li><Link onClick={handleToggle} to={'/local-attractions'}>Local Attraction</Link></li>
            </ul>
          </li>
          <li><Link onClick={handleToggle} to={'/publication'}>Publication</Link></li>
          <li><Link onClick={handleToggle} to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
