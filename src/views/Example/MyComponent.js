import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abc1', title: 'Developer', salary: '500 ' },
            { id: 'abc2', title: 'Tester', salary: '500 ' },
            { id: 'abc3', title: 'Manager', salary: '1000 ' },
        ]
    }
    addJob = (job) => {
        console.log('check job:', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addJob={this.addJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
}
export default MyComponent;