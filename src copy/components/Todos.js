import React, { Component } from 'react'

import { addTodo } from '../actions'
import store from '../store'
export default class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:store.getState().todos
        }
    }
    addTodos = () =>{
    return this.state.todos.map( item => <li key = { item.id } >{ item.task }</li> )
    }
    addData = e =>{
        if(e.keyCode == 13){
            addTodo(e.target.value)
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
              todos: store.getState().todos
            })
          })
    }
    render() {
        const { todos } = this.state
        console.log( todos)
        return (
            <div>
                <input type = "text" onKeyUp = { this.addData }/>
                <ul>
                    { this.addTodos() }
                </ul>
            </div>
        )
    }
}
