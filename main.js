//import "./css/index.css"

const http = require('http');
const hostname = ('127.0.0.1');
const port = 3002;

const server = http.createServer((req,res) => {
res.status = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Ola kkk');
});

server.listen(port,hostname, () => {
    console.log("server rodando!!");
})