import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AddTodo extends React.Component {
    state = {
        todo: ''
    }
    handleChangeTodo = (event) => {
        this.setState({
            todo: event.target.value
        })
    }
    handleClickAdd = (event) => {
        event.preventDefault();
        if (!this.state.todo) {
            toast.error(`Missing Title's Todo `, { autoClose: 500 });
            return;
        }
        let id = Math.floor(Math.random() * 10001)
        this.props.addArrATodo({ id: id, todo: this.state.todo });
        this.setState({
            todo: ''
        })
    }
    render() {
        return (
            <div className="add-todo">
                <h2>Simple Todo Apps With Reactjs</h2>
                <form>
                    <input type="text" value={this.state.todo} onChange={(event) => this.handleChangeTodo(event)} />&nbsp;
                    <button onClick={(event) => this.handleClickAdd(event)}>Add</button>
                </form>
                <br />
                <ToastContainer />
            </div>
        )
    }
}
export default AddTodo;