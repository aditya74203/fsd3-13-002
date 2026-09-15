import http from 'http'

const server = http.createServer((req, res) => {

    console.log("Method:", req.method);
    console.log("url:", req.url);

    if(req.url == '/'){
        res.setHeader("content-type", "text/html");
        res.end("<h1>Hello Server</h1>");
    }
    else if(req.url == "/products"){
        const products = [
            { id: 1, name: "Bottle" },
            { id: 2, name: "Laptop" },
        ];

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(products));
    }
    else {
        res.end();
    }

});

server.listen(5000, () => console.log("prg5 is running"));