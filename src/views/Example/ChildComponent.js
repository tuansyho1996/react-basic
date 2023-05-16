import React from "react";

// class ChildComponent extends React.Component {


//     render() {
//         let { name, address, arrJobs } = this.props;
//         return (
//             <>
//                 <h2>Child component props: {name}-{address}</h2>
//                 <div className="job-list">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.name} -{item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }
const ChildComponent = (props) => {
    let { name, address, arrJobs } = props;
    return (
        <div>
            <h2>Child component props: {name}-{address}</h2>
            <div className="job-list">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.name} -{item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ChildComponent;