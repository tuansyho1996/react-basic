import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'tuan',
        email: 'tuanhosy@gmail.com',
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)} />
                    <h2>My name is {this.state['name']}</h2>
                </div>
                <div>
                    <h2>My email: {this.state.email}</h2>
                </div>
            </>

        )
    }
}
export default MyComponent;