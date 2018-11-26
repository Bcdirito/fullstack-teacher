const express = require('express')
const server = express()

//MIDDLEWARE SECTION
//imports body-parser
const parser = require('body-parser')
//tells body parser to use JSON when looking at the body of ajax calls
server.use(parser.json())

//express.static tells express what file needs to be served up when the 
//client goes to the base '/' page.
//direct it towards the index.html that the react app is attaching itself to

//__dirname represents the filepath on the local computer to THIS file

server.use(express.static(__dirname + '/../client/dist/'))


//this handles any get request sent to the server's restful endpoint, 'allToDos'
server.get('/allToDos', (req, res) => {
    //fake info. this would be pulled from the database
    let tasks = [
        {
            name: 'teach',
            description: 'teach people how to do a full stack app',
            dueDate: '10-31-2018'
        }
    ]

    //res.send sends back the correct headers along with the tasks object attached to the body
    res.send(tasks)
})

//this handles any post request sent to the server's restful endpoint, 'newToDo'
server.post('/newToDo', (req, res) => {

    //req.body uses body parser middleware to grab the entierty of the body from the ajax request
    let newItem = req.body
    
    //save this newItem to the database with some other code

    //sends back a completion message.  while the message itself isn't needed, res.send() would work, for instance,
    //you need res.send() in order to end the ajax request
    res.send('saved to the database!')
})

//sets up the port number for the local host
const port = 8080
//starts the server on that given port
server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})