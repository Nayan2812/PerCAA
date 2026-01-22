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
            <a to="#">Lecture Series</a>
            <ul>
              <li><Link onClick={handleToggle} to={''}>Track 1:Pervasive and Ubiquitous Computing</Link></li>
              <li><Link onClick={handleToggle} to={''}>Track 2: Mobile Communication & Networking</Link></li>
              <li><Link onClick={handleToggle} to={''}>Track 3: Robotics for Healthcare and Assistive Technologies</Link></li>
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
