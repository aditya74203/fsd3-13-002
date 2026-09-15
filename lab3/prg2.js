import http from 'http';

const server = http.createServer((req, res) => {
    res.write("<h1>Hello Client</h1>");
     res.write("<h1>Akhilesh</h1>");
     res.write(
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
     )
    res.end("<h3>Thank you for visiting</h3>");
});

server.listen(4444, () => {
    console.log("Server is running at 4444...");
});