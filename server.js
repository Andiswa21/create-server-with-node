const http = require('http');

const server = http.createServer((req,res) =>{
    try {
        if(req.url === '/' && req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain')
            res.end('Welcome to my Home page');
        }else if(req.url ==='/about' && req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Welcome to my About page')
        }else{
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Page not found');
        }
        
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error')
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})