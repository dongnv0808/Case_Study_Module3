const http = require('http');
const url = require('url');
const fs= require('fs');
const ErrorController = require('./controller/error-controller');
const HomeController = require('./controller/home-controller');


const mimeTypes = {
    "html": "text/html",
    "js": "text/javascript",
    "css": "text/css"
};
let homeConTroller = new HomeController();
let errorController = new ErrorController();
let server = http.createServer((req, res) => {
    let urlParse = url.parse(req.url);
    console.log(req.url);
    let urlPath = urlParse.pathname;
    let method = req.method;
    const filesDefences = req.  url.match(/\.js|.css|/);
    if (filesDefences && filesDefences != '') {
        const extension = mimeTypes[filesDefences[0].toString().split('.')[0].split('/')[1]];
        console.log(extension);
        res.writeHead(200, { 'Content-Type': extension });
        console.log("./views" + req.url);
        fs.createReadStream( "./views" + req.url).pipe(res)
    }
    switch(urlPath){
        case '/':{
            homeConTroller.showHomePage(req, res);
            break;
        };
        case '/register-user': {

            break;
        };
        case '/register-collaborator': {

            break;
        };
        case '/login': {

            break;
        };
        case '/admin/product-list': {

            break;
        };
        case '/collaborator-page': {

            break;
        };
        case '/user-products': {

        };
        // default: {
        //     errorController.showErrorPage(req, res);
        //     break;
        // }
    }
})
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})