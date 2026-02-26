import './topComp.css'
import pce from '/img/Poornima_Logo_logo.jpg'
import ACM from '/logos/ACM_Jaipur.png' 
import ACM_chapter from '/logos/ACM_chapter.png'
import IET_logo from '/logos/IET_logo.png';
import spocus_LOGO from '/logos/spocus.png'
import acm from "/logos/acm_logo.png"
import { Link } from 'react-router-dom';
function TopComp() {
  return (
    <div className='topComp'>
        <div>
          <div className="PerCAA-logo" href="/home">
          
            <video className='pce_logo' autoPlay muted onEnded={(e) => {
            setTimeout(() => {
              e.target.currentTime = 0;
              e.target.play();
            }, 2 * 60 * 1000); // Restart after 2 minutes
          }}
          >
          <source src="/logos/PerCAA_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          </div>
        <div className="top-head">
          {/* <div className='top-line'>International Conference on Pervasive Computing Advances and Applications</div> */}
          <div className='top-line percaa'>PerCAA 2026</div>
          <div className="topmarquee">{/*3<sup>rd</sup>*/} International Symposium on Pervasive Computing Advances and Applications</div>
          
          {/*<div className='sponsor'>TECHNICALLY SPONSERED BY MEERUT & JAIPUR ACM PROFESSIONAL CHAPTER</div>
          {/*<div className='top'>
          <div className="top-logos">
          <img src={pce} alt="poornima university logo" className='pce_logo' />
          <img src={acm} alt="acm chapter logo" className='acm_logo' />
          <img className='IET_LOGO' src={IET_logo} alt='IET Logo'  />
          <img className='spocus_LOGO' src={spocus_LOGO} alt='spocus_LOGO'  />
        </div>
        </div>*/}
          <div className='top-line'> 13<sup>th</sup> {/*- 08<sup>th</sup>*/} March, 2026 </div>
        </div>
        {/*<div className="top-logos">
          {/* <img src={acm} alt="Poornima College Of Engineering" className='sp_logo' /> 
          <img className='IET_LOGO' src={IET_logo} alt='IET Logo'  />
          <img className='spocus_LOGO' src={spocus_LOGO} alt='spocus_LOGO'  />
        </div>
      </div>
      <div className="smallmarquee"> <div className="top-logos-marquee">
      <img src={pce} alt="poornima university logo" className='pce_logo' />
      <img src={acm} alt="acm chapter logo" className='acm_logo' />
        <img src={IET_logo} alt='IET Logo' />
        <img className='spocus_LOGO' src={spocus_LOGO} alt='spocus_LOGO'  />
      </div>*/}</div>
    </div>
  );
}

export default TopComp;
