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
        this.getTasks = this.getTasks.bind(this)
        this.saveTask = this.saveTask.bind(this)
    }

    getTasks() {
        //this next line is the entirety of the ajax get call to the
        //restful endpoint allToDos
        axios.get('/allToDos')
        //.then represents the action that shall happen upon getting a 
        //sucessful signal from the server
             .then((response) => {
                 //if you get anything back from the server, it is attached
                 //to the above argument, response, on its 'data' property
                 let tasks = response.data
                 this.setState({toDos: tasks})
             })
             //.catch is what runs if the server sends an error
             .catch((err) => {
                 console.error(err)
             })
            }
            
            saveTask() {
                let taskToSave = this.state.currentInput
                axios.post('/newToDo', taskToSave)
                .then((resposne) => {
                    console.log(response.data)
                })
                .catch((err) => {
                    console.error(err)
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