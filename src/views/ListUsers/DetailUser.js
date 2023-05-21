import React from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";


class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        const user = res.data.data.find((item) => { return item.id === Number(this.props.match.params.id) })
        this.setState({
            user: user && Object.keys(user).length !== 0 ? user : {}
        })
    }
    handleClickBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state
        return (
            <div>
                {Object.keys(user).length !== 0 &&
                    <div className="detail-user">
                        <h2>{user.first_name}</h2>
                        <div>{user.email}</div>
                        <br />
                        <img alt={` info ${user.first_name}`} src={user.avatar} />
                        <div>
                            <button onClick={() => this.handleClickBack()}>Back</button>
                        </div>
                    </div>
                }
            </div>

        )
    }
}
export default withRouter(DetailUser)