const http = require('http')
const fs = require('fs')

function renderHtml(path, res) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('File not found')
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
}

http.createServer((req, res) => {

    switch (req.url) {
        case '/contact':
            renderHtml('./contact.html', res)
            break;
        case '/about':
            renderHtml('./about.html', res)
            break
        default:
            renderHtml('./index.html', res)
            break
    }

}).listen(2307, () => {
    console.log('Server is listening on port 2307...')
})