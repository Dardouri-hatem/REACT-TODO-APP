import React, { Component } from 'react'
import "./ToDoStyle.css"




class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state={
            btnComplete:"Complete",
        }

    }
    handleDid(e){
        e.target.classList.toggle('active');
        let items = Array.from( document.getElementsByClassName('item'))
        items.map(el=>(el.value!==e.target.value)?null:el.classList.toggle("active"))
      
    }
    render() {
        return (
            <div class="list-todo">
                <ul class="to-do">

                 {this.props.item.map((currentItem,i)=>(currentItem==="")?null:
                <li ><button className="complete-btn" value={i} onClick={this.handleDid}> {this.state.btnComplete}</button>
                    <button className="delete-btn" onClick={()=>this.props.Remove(i)} > Delete </button>
                    <button className="item" value={i}> {currentItem} </button>
                </li>
                )
                }
                
                </ul>
            </div>


        )
    }
}

export default ToDo

