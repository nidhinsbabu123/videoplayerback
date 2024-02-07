// import json-server using require method
const jsonserver = require('json-server')

// create server
const server = jsonserver.create()

// set the redirection 'PATH' to db.json when the json-server is running ----> that is setting the route
const router = jsonserver.router('db.json')

// create middleware
const middleWare = jsonserver.defaults()

// setting up the port for back-end
const PORT = process.env.PORT||4000

// use middleware in server
server.use(middleWare)

// to do the route ing. the process of routing
server.use(router)

// To analyse weather server is working or not
server.listen(PORT, () => {
    console.log('Video Player Server Started @ port :- '+PORT);
})