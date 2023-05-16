import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "tuan",
        lastName: "ho",
        address: "vietnam",
        arrJobs: [
            { id: 'abc1', name: 'Developer', salary: '500 $' },
            { id: 'abc2', name: 'Tester', salary: '500 $' },
            { id: 'abc3', name: 'Manager', salary: '1000 $' },
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleClickSumit = (event) => {
        console.log('state:', this.state);
    }
    render() {
        return (
            <>
                <label htmlFor="fname">First name:</label>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br />
                <label htmlFor="lname">Last name:</label>
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => { this.handleChangeLastName(event) }}
                /><br />
                <input type="submit" value="Submit" onClick={(event) => this.handleClickSumit(event)} />
                <ChildComponent
                    name={this.state.firstName}
                    address={this.state.address}
                    arrJobs={this.state.arrJobs} />
            </>

        )
    }
}
export default MyComponent;