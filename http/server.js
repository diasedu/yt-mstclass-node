const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url;
    const filePath = path.join(__dirname, 'public', file);
    const extname = path.extname(filePath);

    const allowedFileTypes = ['.html', '.css', '.js'];
    const allowed = allowedFileTypes.find(item => item == extname);

    if (!allowed) return;

    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw erro;

            res.end(content);
        }
    );
        
    
    /* 
        console.log(file);

        res.end('cheguei');
        
        if (req.url === '/') {
            
        }
        if (req.url ==="/contato")
            return res.end('<h1>Contato</h1>')
        
        return 
    */
}).listen(5000, () => console.log('SERVER IS RUNNING'));