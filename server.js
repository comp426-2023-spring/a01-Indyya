const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const port = args.port || 300;

fs.readFile('./public/index.html','utf8', (err, data) =>{ 
      if (err) {
	 console.error(err);
	 return;
      }
      console.log(data);

      const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type","test/html"
	readIndex((data)=> {
		res.end(data);
     })
 })
server.listen(port,() => {
   console.log('Server listening on port ${port}');
});

