import RightContent from "../RightContent/RightContent";
import "./ImportantDates.css";
import Footer from "../Footer/Footer";
import ImportantBanner from "../ImportantLink/ImportantLink";

const ImportantDates = () => {
    const dates = [
        { event: "Start of Call for Papers", date: ['April 10, 2026'] },
       /* { event: "Last Date of Paper Submission", date: ['August 21, 2025'] },*/
        { event: "Final Paper Submission Deadline", date: [/*'September 01, 2025','September 15, 2025',*/'April 27, 2026','May 07, 2026'] },
        { event: "Author Notification", date: [/*'September 15, 2025','September 30, 2025',*/'April 29, 2026','May 10, 2026'] },
        { event: "Camera Ready Paper Submission", date: [/*'October 01, 2025',*/'April 27, 2026','May 13, 2026'] },
        
        { event: "Last Date of Registration", date: ['April 30, 2026','May 15, 2026'] },
        { event: "Conference Date", date: ['May 20-21, 2026'] },
        /*{ event: "Early Bird Registration" , date:['October 10, 2025']},*/
    ];

    return (
        <>
            <ImportantBanner />
            <div className="papaContainer">
                <div className="leftContainer ">
                    <div className="dates-heading">
                        Important Dates :
                    </div>
                    <div className="table-container">
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
                                        <td className="rightContentTable">
                                            {item.date.length === 2 ? (
                                                <>
                                                    <span className="cut">{item.date[0]}</span><br /><b>{item.date[1]}</b>
                                                </>
                                            ) : (
                                                item.date[0]
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default ImportantDates