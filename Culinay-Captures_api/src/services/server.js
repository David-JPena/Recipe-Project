const http = require ('http');
const index = require('../../index')

const server = http.createServer(index);
server.listen(3000);

server.on('listening',()=>{
    console.log('El servidor esta escuchando el puerto 3000')
})