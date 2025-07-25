import RightContent from "../RightContent/RightContent"
import Footer from "../Footer/Footer"
import data from "./data.json"
import styles from "./LocalOrganizingCommittee.module.css"
import student from "./students.json"
import ImportantBanner from "../ImportantLink/ImportantLink";
const LocalOrganizingCommittee = ()=>{
    return(
        <>
            <ImportantBanner/>
            <div className="papaContainer">
                <div className="leftContainer">
                    <div className={styles.mainHeading}>
  <span className={styles.titleLine}></span>
  <h1>Local Organizing Committee</h1>
  <span className={styles.titleLine}></span>
</div>

                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        {/*<img src={item.img} alt={item.name} className={styles.profileImage} />*/}
                                        <h2>{item.name}</h2>
                                        <p className={styles.designation_title}>{item.designation}</p>
                                        <p>{item.institution}</p>
                                    </div>
                                )
                            })
                        }
                        {/* {
                            student.map((item , index) => {
                                return(
                                    <div className={styles.card}>
                                        <h2>{item.name}</h2>
                                        <p>{item.details}</p>
                                    </div>
                                )
                            })
                        } */}
                    </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <RightContent></RightContent>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}


export default LocalOrganizingCommittee