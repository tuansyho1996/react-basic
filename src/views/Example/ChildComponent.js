import React from "react";

class ChildComponent extends React.Component {


    render() {
        return (
            <div>
                Hello Child Component {this.props.name}
            </div>

        )
    }
}
export default ChildComponent;