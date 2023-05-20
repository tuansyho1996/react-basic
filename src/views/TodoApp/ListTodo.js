import React from "react";
import AddTodo from "./AddTodo";
import './Todo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        editState: {},
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
    handleClickEditJob = (job) => {
        this.setState({
            editState: job
        })
    }
    handleChangeEditTodo = (event) => {
        let editTodoCopy = this.state.editState;
        editTodoCopy.todo = event.target.value;
        this.setState({
            editState: editTodoCopy
        })
    }
    handleSaveEditTodo = (index) => {
        let { arrListTodo, editState } = this.state;
        let currentArrListTodo = arrListTodo;
        if (!this.state.editState.todo) {
            toast.error(`Missing title's job edit`, { autoClose: 500 })
            return
        }
        console.log('check todo hadndle arr', currentArrListTodo, index)
        currentArrListTodo[index].todo = editState.todo
        this.setState({
            editState: {},
            arrListTodo: currentArrListTodo
        })
    }
    render() {
        let { arrListTodo, editState } = this.state;
        let checkEmptyEditObject = Object.keys(editState).length === 0;
        return (
            <div>
                <AddTodo
                    addArrATodo={this.addArrATodo}
                />
                <div className="list-todo-container">
                    {arrListTodo && arrListTodo.length > 0 &&
                        arrListTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {checkEmptyEditObject === true ?
                                        <>
                                            <span>
                                                {index + 1} &nbsp;- &nbsp;
                                                {item.todo}&nbsp;&nbsp;
                                            </span>
                                            <button onClick={() => this.handleClickEditJob(item)}>Edit</button>&nbsp;&nbsp;
                                            <button onClick={() => this.handleClickDeleteJob(item)}>Delete</button>
                                        </>
                                        :
                                        editState.id === item.id ?
                                            <div className="input-edit-todo">
                                                {index + 1} &nbsp;- &nbsp;
                                                <input type="text" value={editState.todo} onChange={(event) => this.handleChangeEditTodo(event)} />&nbsp;&nbsp;
                                                <button onClick={() => this.handleSaveEditTodo(index)}>save</button>
                                            </div>
                                            :
                                            <>
                                                <span>
                                                    {index + 1} &nbsp;- &nbsp;
                                                    {item.todo}&nbsp;&nbsp;
                                                </span>
                                                <button onClick={() => this.handleClickEditJob(item)}>Edit</button> &nbsp; &nbsp;
                                                <button onClick={() => this.handleClickDeleteJob(item)}>Delete</button>
                                            </>
                                    }

                                    <hr />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListTodo;