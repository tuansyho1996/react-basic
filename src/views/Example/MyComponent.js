import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    state = {
        firstName: "tuan",
        lastName: "ho"
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
                <label htmlFor="fname">First name:</label><br />
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => { this.handleChangeLastName(event) }}
                /><br /><br />
                <input type="submit" value="Submit" onClick={(event) => this.handleClickSumit(event)} />
                <ChildComponent name={'tuan'} />
                <ChildComponent age={'27'} />
            </>

        )
    }
}
export default MyComponent;