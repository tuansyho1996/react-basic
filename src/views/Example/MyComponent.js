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
    handleClickButton = () => {
        alert('Click me');
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)} />
                    <h2>My name is {this.state['name']}</h2>
                </div>
                <div className="second">
                    <h2>My email: {this.state.email}</h2>
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>

        )
    }
}
export default MyComponent;