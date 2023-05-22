import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo');
    //     }, 5000)
    // }
    render() {
        let { dataRedux } = this.props
        console.log(dataRedux)
        return (
            <div>
                <img style={{ height: '200px', width: '200px', marginTop: '20px' }} src={logo} alt="logo" />
                {
                    dataRedux.map((item) => {
                        return (<h2 key={item.id}>Name:{item.name}</h2>)
                    })
                }
            </div>
        )
    }
}
const mapStateProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateProps)(Color(Home));