import React from "react"
import ToDoList from './ToDoList.jsx'
const axios = require('axios')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInput: '',
            toDos: []
        }
    }

    getTasks() {
        axios.get('allToDos')
             .then((response) => {
                 let tasks = response.data
                 this.setState({toDos: tasks})
             })
    }

    render() {
        return (
            <div>
                Basic CRUD To Do
                <br/>
                To Do: <input type="text" value = {this.state.currentInput}></input>
                <br/>
                <br/>
                Current To Dos:
                <ToDoList />
            </div>
        )
    }
}

export default App