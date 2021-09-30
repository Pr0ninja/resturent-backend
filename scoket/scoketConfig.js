const server = require('../index');

const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('A user connected :',socket.id);

    socket.on('massage',(data)=>{
    })

    
    
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });