import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.jpg"

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 5000)
    // }
    render() {
        return (
            <div>
                <img style={{ height: '200px', width: '200px', marginTop: '20px' }} src={logo} alt="logo" />
            </div>
        )
    }
}
export default Color(Home);