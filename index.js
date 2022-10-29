const express = require('express');
const server = express();
const PORT = 8000;
const HOST = '127.0.0.1';
const friendsroutes = require('./routes/friends.routes');


server.use('/', friendsroutes);

server.listen(PORT, HOST, () => {
    console.log('Server is running on http://' + HOST + ':' + PORT);
});