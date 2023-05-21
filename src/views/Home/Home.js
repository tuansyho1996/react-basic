import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo');
        }, 5000)
    }
    render() {
        return (
            <div>
                Wellcome Home
            </div>
        )
    }
}
export default withRouter(Home);