import React from "react";

class ChildComponent extends React.Component {


    render() {
        let { name, age } = this.props;
        return (
            <div>
                Child component name:  {name} {age}
            </div>

        )
    }
}
export default ChildComponent;