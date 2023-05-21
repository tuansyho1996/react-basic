import React from "react";
import Color from "../HOC/Color";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 5000)
    // }
    render() {
        return (
            <div>
                Wellcome Home
            </div>
        )
    }
}
export default Color(Home);