import React from "react";
import axios from "axios";
import './ListUsers.scss';
import { withRouter } from 'react-router-dom';

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        console.log('check params', this.props)
        const res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleClickUser = (item) => {
        this.props.history.push(`/user/${item.id}`)
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-users-container">
                <div className="list-users-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="user-child" key={item.id} onClick={() => this.handleClickUser(item)}>
                                    {index + 1}&nbsp;-&nbsp;{item.first_name}&nbsp;-&nbsp;{item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);