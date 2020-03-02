import React, { Component } from 'react'
import "./ToDoStyle.css"
import ToDo from './ToDo'


class FormToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            item :[],
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            input: e.target.value,
        })
    }
    
    handleAddItem = (e) => { 
        e.preventDefault()
        this.setState({
            item : this.state.item.concat(this.state.input),

            input:""
        })

     }

    handleRemove(id){
        console.log(this.state.item)
        this.setState({
            item: this.state.item.map((el,i)=> (i == id)?el="":el),
        })
        console.log(this.state.item)

    }

    
    render() {
        return (
            <div>
                <form class="container" onSubmit={this.handleAddItem}>
                    <h1>To-Do App!</h1>
                    <h3>add new To-Do</h3>
                    <input class="txt" type="text" value = {this.state.input}placeholder="Enter new task" onChange={this.handleUpdateInput} />
                    <button id='add-btn' onClick={this.handleAddItem.bind(this)}> Add </button>
                </form>
                 <p className="paragraph">Let's get some work done</p>
                <ToDo Remove={this.handleRemove.bind(this)} item={this.state.item} />

            </div>
        )
    }
}

export default FormToDo





