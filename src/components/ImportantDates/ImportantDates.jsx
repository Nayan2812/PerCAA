import RightContent from "../RightContent/RightContent";
import "./ImportantDates.css";
import Footer from "../Footer/Footer";
import ImportantBanner from "../ImportantLink/ImportantLink";

const ImportantDates = () => {
    const dates = [
        { event: "Start of Call for Papers", date: ['July 24, 2025'] },
        { event: "Last Date of Paper Submission", date: ['August 21, 2025'] },
        { event: "Acceptance Notification", date: ['August 28, 2025'] },
        { event: "Final Paper Submission Deadline", date: ['September 04, 2025'] },
        { event: "Last Date of Registration", date: ['September 11, 2025'] },
        { event: "Conference Date", date: ['November 07-08, 2025'] },
        /*{ event: "Camera Ready Paper Submission", date: ['September 30, 2024', 'October 08, 2024'] },
        { event: "Early Bird Registration" , date:['October 10, 2024']},*/
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