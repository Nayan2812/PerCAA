import "./Home.css";
import RightContent from "../RightContent/RightContent";
import { useEffect, useState } from "react";
// import Crousal from '../topimagesSection/Crousal'
import Footer from "../Footer/Footer";
import NewCrousal from "../NewCrousal/NewCrousal";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";
import ImportantBanner from "../ImportantLink/ImportantLink";

function Home() {
  const [showPopUp , setShowPopUp] = useState(false);
  const closebuttonHandler = ()=>{
    setShowPopUp(!showPopUp)
  }
  useEffect(()=>{
    setTimeout(()=>{
      setShowPopUp(true);
    },300)
  } , [])
  return (
    <>
      {/* <Crousal></Crousal> */}
      <div className={`${showPopUp ? 'reducedOpacity' : ''}`}>
        <NewCrousal></NewCrousal>
      </div>
      <ImportantBanner/>

      {
        showPopUp && (
          <div className={`popup_container ${showPopUp ? 'show' : ''}`}>
              <div className="top_heading_container">
                  <div className="top_heading_container_2">
                    <p className="percaa_pop">PerCAA 2026</p>
                    {/*<div className="perca_top_sub">Important Links</div>*/}
                  </div>
                  <div className="close_icon" onClick={closebuttonHandler}>
                    <IconContext.Provider value={{ color: "white", size: "30px" }}>
                    <div onClick={closebuttonHandler} className="close_icon">
                    <IoMdClose />
                    </div>
                    </IconContext.Provider>
                  </div>
              </div>
              <div className="popup_content_container">
                <div className="popup_content">
                  <p><span>Note : </span> Submitted Papers will be published by the Institution of Engineering and Technology (IET) on IET Digital Library, indexed by IET Inspec and Standard paper of Conference will be submitted to the following books published under Bentham series. </p><br/><p><strong>Selected papers will be published in Scopus indexed journal special issue.</strong></p>
                </div>
                
              </div>
          </div>
        )
      }
      <div className={`papaContainer ${showPopUp ? 'reducedOpacity' : ''}`}>
        <div className="leftContainer">
          <div className="homeContent">
            <div className="homeheading">ABOUT THE CONFERENCE</div>
            <div className="paracontent">
              <p>
                PerCAA-2026(Pervasive Computing Advances and Applications) aim is to unite scholars, scientists, and researchers, facilitating the exchange of their knowledge, expertise, and experiences concerning advancements in the field of computing, as well as sciences and communication technologies.
              </p>
              <p>
                The conference involve at all levels the leading academicians from India and abroad having expertise in Pervasive Computing Domain. Maintaining Quality of research and publications is the primary objective of the organizers. Dr. Sajal Das and Dr. Mohan Kumar are founder members of IEEE Conference on Pervasive Computing (PerCom) organizing since 2003. The advice and support from them has been sought for its planning and execution. The conference aims to create a leading interdisciplinary platform, fostering global connections among educators, researchers, and practitioners. Furthermore, it will facilitate the presentation and discussion of the latest innovations, trends, and issues in the relevant research areas.
              </p>
            </div>
          </div>
          <div className="homeContent">
            <div className="homeheading">ABOUT POORNIMA COLLEGE</div>
            <div className="paracontent">
              <p>
                Poornima College of Engineering, established in the year 2000 aims to impart pragmatic technical education at par with international standards. With innovation driven approach and a cosmopolitan based learning, we relentlessly  follow the pursuit of excellence. In our magnificent journey of Silver Jublee, we have set benchmarks and reached new pinnacles in engineering disciplines. Poornima College offers a pleasant and engaging environment to its students. The student's routine revolves around balanced amount of work, play, and leisure time activities. Moreover, the college curriculum is structured in an way, that it is both engaging and challenging. Project-based learning, problem-based learning, and the freedom to select the desired subject, enhances the student's participation in college activities.
              </p>
              <p>
                Furthermore, a weekly induction programme, mentor system, and close student-teacher relationship help to keep the students eager and motivated to study. The students' creative engagement is maintained throughout the year by organizing frequent technical, sports and cultural activities at departmental, intra-institutional, and inter-institutional levels. Last but not the least, Jaipur's pleasant climate, good food, transportation system, parks, and other amenities make a stay at the Poornima campus comfortable and advantageous for the overall development of the students.
              </p>
              <p>
              We have been awarded a prestigious NAAC A+ accreditation and enjoy autonomous status by the UGC. These accolades reflect our commitment to quality education and research. As we embark on these two days of insightful presentations, engaging discussions, and networking opportunities, let us embrace the spirit of innovation and sustainability that drives us all.
              </p>
            </div>
          </div>
          <div className="homeContent">
            <div className="homeheading">ABOUT DEPARTMENT OF COMPUTER ENGINEERING</div>
            <div className="paracontent">
              <p>
                Computer Engineering combines the academic disciplines of electronics engineering and computer sciences which helps our engineering graduates to combine their understanding of computer hardware and software to innovate the stream. Computer engineering programmes prepare graduates for highly valued, sky-high careers in design, development, research and testing of various hardware and software.The department focuses not only on the theoretical aspects but emphasize the overall development of the students. It conducts various co-curricular activities such as informative workshops and industrial visits to companies. It makes the student industry ready with all practical exposer, expert talks on new technologies, technical events like coding competition, hackathon, etc. We believe, such activities help them to meet the demands of Industry or existing market.
              </p>
            </div>
          </div>
          <div className="homeContent">
            <br/>
            <div className="paracontent">
              <p>
                <strong>Acknowledgment:</strong> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rightContainer">
          <RightContent></RightContent>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
