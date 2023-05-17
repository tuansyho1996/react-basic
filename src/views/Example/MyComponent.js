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
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJob
        })
    }
    render() {
        return (
            <>
                <AddComponent
                    addJob={this.addJob}
                />
                <ChildComponent
                    deleteAJob={this.deleteAJob}
                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
}
export default MyComponent;