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
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === false ? 'showJob = false' : 'showJob = true';
        console.log('checkShowJob', check)
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
                                                {item.name} -{item.salary}
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