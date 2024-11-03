const http = require( 'http');
const express =require( 'express');
const cors =require('cors');
const socketIO =require( 'socket.io');

const app=express();

// if 4500 port not available use any of the port availaible
const port = 4500 || process.env.PORT;

app.use(cors());

//calling express
const server=http.createServer(app);

//Circuit
const io=socketIO(server);

app.get("/",(req,res)=>{
    res.send({
        message:"Server side is working"
    })
})

const users=[{}];

io.on("connection",(socket)=>{
    console.log('New connection');

    socket.on('joined',({user})=>{
        users[socket.id]=user;
        console.log(`${user} has joined`);
        socket.broadcast.emit('userJoined',{user:'Admin',message:`${users[socket.id]} has joined`});
        socket.emit('welcome',{user:'Admin',message:`Welcome to the chat ${users[socket.id]}`})
    })

    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id})
    })

    socket.on("disconnect",()=>{
        socket.broadcast.emit('leave',{user:'Admin',message:`${users[socket.id]} has left`});
        console.log(`${users[socket.id]} left`);
    })
});

server.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`);
})