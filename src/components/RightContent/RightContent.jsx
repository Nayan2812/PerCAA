import './RightContent.css'
import ACM_Jaipur from '/logos/ACM_Jaipur.png'
import ACM_merrut from '/logos/ACM_merrut.png'
import ACAlert from '/logos/ACAlert.png'
import Poornima_Logo_full from '/img/Poornima_Logo.jpg'
import IET_logo from '/logos/IET_logo.jpg'
import ACM_chapter from '/logos/ACM_chapter.png'
import Int_CA from '/logos/Int_CA.png'
import naac from '/logos/naac.png'
import Scopus from '/logos/spocus.png'
import Poornima_Logo from "/img/Poornima_Logo_logo-removebg.png"
import Poornima from "/img/Poornima-removebg.png"
const RightContent = () => {
    // { event: "Acceptance Notification", date: '<span className="cut">August 31, 2024</span> September 15, 2024'},
    const dates = [
        { event: "Start of Call for Papers", date: ['February 05, 2026'] },
       /* { event: "Last Date of Paper Submission", date: ['August 21, 2025'] },*/
        { event: "Final Paper Submission Deadline", date: [/*'September 01, 2025','September 15, 2025',*/'February 20, 2026','March 01, 2026'] },
        { event: "Author Notification", date: [/*'September 15, 2025','September 30, 2025',*/'February 25, 2026','March 04, 2026'] },
        { event: "Camera Ready Paper Submission", date: [/*'October 01, 2025',*/'February 20, 2026','March 07, 2026'] },
        
        { event: "Last Date of Registration", date: ['February 25, 2026','March 08, 2026'] },
        { event: "Conference Date", date: ['March 13, 2026'] },
        /*{ event: "Early Bird Registration" , date:['October 10, 2025']},*/
    ];

    const handleclickmedia1 = () => {
        window.open('https://internationalconferencealerts.com', '_blank');
    }
    const handleclickmedia2 = () => {
        window.open('http://allconferencealert.net', '_blank');
    }

    return (
        <div>
            <div className="rightContent">

                <div className="sectionHeading">Organized By</div>
                <div className="technicalSponsers">
                    {/* <img src={Poornima_Logo} alt="" /> */}
                    {/* <img src={Mnit_logo} alt="" /> */}
                    {/* <img src={ACM_Jaipur} alt="" /> */}
                    <div class="Poornima">
                    <img src={Poornima_Logo} alt="" />
                    {/* <img src={Poornima} alt="" /> */}
                    </div>
                    <div className="smallLogosTechSponsers">
                        
                        <img src={naac} alt="" />
                        {/* <img src={ACM_merrut} alt="" /> */}
                    </div>
                </div>

                <div className="sectionHeading">Important Dates</div>
                <table>
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((item, index) => (
                            <tr key={index}>
                                <td>{item.event}</td>
                                <td className='rightContentTable'>
                                    {item.date.length === 2 ? (
                                        <>
                                            <span className="cut">{item.date[0]}</span><br /> <b>{item.date[1]}</b>
                                        </>
                                    ) : (
                                        item.date[0]
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="sectionHeading smallSectionHeading">Sponsored by</div>
                <div className="Sponsers">
                    {/* <img src={Poornima_Logo_full} alt="" /> */}
                    {/* <img src={IET_logo} alt="" /> */}
                    <div className='right_poornima_chapterLogo'>
                        <img  src={Poornima_Logo} alt="" />
                        {/* <img  src={Poornima} alt="" /> */}
                    </div>
                    <div className="smallLogosSponsers">
                        <img src={IET_logo} alt="" />
                        <img src={Scopus} alt="" />
                    </div>
                </div>
                {/*<div className="sectionHeading smallSectionHeading">Technically Sponsored by</div>*/}
                {/* <div className="technicalSponsers">
                    {/* <img src={Poornima_Logo_full} alt="" />*/} 
                    {/* <img src={IET_logo} alt="" /> */}
                    {/*<img className='right_acm_chapterLogo' src={ACM_chapter} alt="" />
                    {/*<div className="smallLogosTechSponsers">
                        {/* <img src={ACM_Jaipur} alt="" /> */}
                        {/*<img src={ACM_merrut} alt="" />
                    {/*</div>
                {/*</div> */}
                {/* <div className="sectionHeading smallSectionHeading">Media Partners</div>
                <div className="technicalSponsers">
                    <img onClick={handleclickmedia1} style={{ marginTop: "8px", cursor: "pointer" }} className='right_acm_chapterLogo' src={Int_CA} alt="International Conference Alerts" />
                    <img onClick={handleclickmedia2} style={{ marginTop: "8px", cursor: "pointer" }} className='right_acm_chapterLogo' src={ACAlert} alt="All Conference Alerts" />
                </div> */}

                {/* <div className="sectionHeading smallSectionHeading">Selected Extended Post Conference Papers will be published in</div>
                <div className="conferencePapers">
                    <img src={computingJournel} alt="" />
                    <img src={naturalComputing} alt="" />
                </div>

                <div className="rredheadline">
                Selected papers will be published in Scopus
                indexed Springer Proceeding
                </div> */}

            </div>
        </div>
    )
}

export default RightContent