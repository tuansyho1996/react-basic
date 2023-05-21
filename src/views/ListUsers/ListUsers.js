import React from "react";
import axios from "axios";
import './ListUsers.scss';

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        const res = await axios.get('https://reqres.in/api/users?page=2');
        console.log(res);
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-users-container">
                <div className="list-users-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="user-child" key={item.id}>
                                    {index + 1}&nbsp;-&nbsp;{item.first_name}&nbsp;-&nbsp;{item.last_name}
                                </div>
                            )
                        })

                    }
                    {/* <div className="user-child">
                        1 - tuan - sy ho
                    </div>
                    <div className="user-child">
                        1 - tuan - sy ho
                    </div>
                    <div className="user-child">
                        1 - tuan - sy ho
                    </div> */}
                </div>
            </div>
        )
    }
}
export default ListUser;