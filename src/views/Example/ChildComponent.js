import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false
    }
    handleShowJob = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleOnClickDeleteJob = (job) => {
        this.props.deleteAJob(job);
    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {
                    showJob === false ?
                        <div>
                            <button onClick={() => this.handleShowJob()}>Show</button>
                        </div>
                        :
                        <>
                            <div className="job-list">
                                {
                                    arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} -{item.salary} <span>$</span> 	&nbsp; <span
                                                    onClick={() => this.handleOnClickDeleteJob(item)}
                                                >X</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowJob()}>Hide</button>
                            </div>
                        </>
                }

            </>
        )
    }
}

export default ChildComponent;