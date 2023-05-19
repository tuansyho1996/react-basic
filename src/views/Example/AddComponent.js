import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleClickSumit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        this.props.addJob({
            id: Math.floor(Math.random() * 10001),
            title: this.state.title,
            salary: this.state.salary,
        });
        this.setState({
            title: '',
            salary: ''
        })

    }
    render() {
        return (
            <div className="form-input">
                <form>
                    <label htmlFor="fname">Job's title:</label>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label>
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => { this.handleChangeSalary(event) }}
                    /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleClickSumit(event)} />
                    <br />
                </form>

            </div>
        )
    }
}
export default AddComponent;