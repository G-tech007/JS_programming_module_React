const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!.....Node js chalu ho gaya bhadwa');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
