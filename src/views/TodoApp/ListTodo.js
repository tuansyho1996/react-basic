import React from "react";
import AddTodo from "./AddTodo";
import './Todo.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListTodo extends React.Component {

    state = {
        arrListTodo: [
            { id: '001', todo: 'Home Working' },
            { id: '002', todo: 'Making videos' },
            { id: '003', todo: 'Fixing bugs' },
        ]
    }
    addArrATodo = (todo) => {
        let currentArrListTodo;
        currentArrListTodo = [...this.state.arrListTodo, todo];
        this.setState({
            arrListTodo: currentArrListTodo
        })
        toast.success('Wow so easy', { autoClose: 500 })
    }
    handleClickDeleteJob = (job) => {
        let currentArrListTodo;
        currentArrListTodo = this.state.arrListTodo.filter(item => item.id !== job.id);
        this.setState({
            arrListTodo: currentArrListTodo
        })
        toast.success('Delete Success', { autoClose: 500, })
    }
    render() {
        let arrListTodo = this.state.arrListTodo;
        return (
            <div>
                <AddTodo
                    addArrATodo={this.addArrATodo}
                />
                <div className="list-todo-container">
                    {
                        arrListTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>
                                        {index + 1} &nbsp;- &nbsp;
                                        {item.todo}&nbsp;&nbsp;
                                    </span>
                                    <button>Edit</button>&nbsp;&nbsp;
                                    <button onClick={() => this.handleClickDeleteJob(item)}>Delete</button>
                                    <hr />
                                </div>

                            )
                        })
                    }
                </div>
                <ToastContainer />
            </div>
        )
    }
}
export default ListTodo;