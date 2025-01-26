// const fs = require("fs");

//createFile
// fs.writeFileSync('read.txt',"Dabhi Rajdeepsinh");
// fs.writeFileSync('read.txt',"Dabhi Ravi");

//AppendData
// fs.appendFileSync('read.txt'," Dabhi Rajdeepsinh shaileshkumar");

//ReadFile
// fs.readFileSync('read.txt');
// const data = fs.readFileSync('read.txt','utf8');
// console.log(data);

//RenameFile Name
// fs.renameSync('read.txt','readwrite.txt');


// fs.mkdirSync('Dabhi');
// fs.writeFileSync('Dabhi/bio.txt','Hello,My name is Dabhi');
// fs.appendFileSync('Dabhi/bio.txt', " I'm From bharuch");
// const rFile = fs.readFileSync('Dabhi/bio.txt','utf-8');
// console.log(rFile);
// fs.renameSync('Dabhi/bio.txt','Dabhi/mybio.txt');
// fs.unlinkSync('Dabhi');
// fs.rmdirSync('Dabhi');



//NodeJS Asynchronous File System Core Modules


// fs.writeFile('read.txt',"Today is lazyDay",
//     (err) =>{
//         console.log("File is created");
//         console.log(err)
//     }
// );

// fs.appendFile('read.txt',"\nData Append",(err)=>{
//     console.log("Data Appended");
// });

// fs.readFile('read.txt',"utf-8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// });


// fs.unlink('readwrite.txt',(err)=>{
//     console.log("Deleted");
// });


//NodeJS OS Module To get Operating System info

// const os = require('os');
// console.log(os.arch());

// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.hostname());
// console.log(os.platform());



//PATH Module in Node.JS

// const path = require('path');

// console.log(path.dirname('C:/Users/Home/nodejsPractice/index.js'));
// console.log(path.extname('C:/Users/Home/nodejsPractice/index.js'));
// console.log(path.basename('C:/Users/Home/nodejsPractice/index.js'));
// console.log(path.parse('C:/Users/Home/nodejsPractice/index.js'));


//Create and Export Our Own Modules in Node JS

// module.exports = {add,...};
// const {add,...} = require("path");


//Import NPM Module in Node.JS

// import chalk from 'chalk';
// import validator from 'validator';


// console.log(chalk.bgBlue.underline.inverse("Hello Dabhi"));
// const em = validator.isEmail("DabhiRaj@gmail.com");
// console.log(em ? chalk.green.inverse(em) : chalk.red.inverse(em));

//Module wrapper function

// (function(exports,require,module,__filename,__dirname){

// });



//Creating Our Own Web Server in Node.js

// import http from 'http';


// const server = http.createServer((req,res) =>{

//     res.end('Hello From the Other sides');

// });

// server.listen(3000,"127.0.0.1",()=>{
//     console.log("Listening to the port no 3000")
// });


// NodeJS Routing | Handled HTTP Requests in Node.JS

// import http from 'http';
// import url from 'url';

// const server = http.createServer((req,res) =>{

//     if(req.url == '/about'){
//         res.end("About Page");
//     } else if(req.url == '/contact'){
//         res.end("ContactPage");
//     } else {
//         res.writeHead(404,{"content-type":"text/html"});
//         res.end("404 error pages . Page doesn't exist");
//     }
    
// });

// server.listen(8000,"127.0.0.1"),()=>{
//     console.log("Just Listening the port no 3000")
// };



//JSON in NodeJS

// import fs from 'fs';

// const bioData = {

//     name:"Dabhi",
//     age: 26,
//     gender:"Male"
// };

// console.log(bioData);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData); 

// const objData = JSON.parse(jsonData);

// console.log(objData);

// const jsonData = JSON.stringify(bioData);

// fs.writeFile('JSON.txt',jsonData,(err)=>{
//     console.log("Write Data into Json Format")
// }); 
// fs.readFile("JSON.txt","utf-8",(err,data)=>{
//     console.log(data);
//     const objData = JSON.parse(data);
//     console.log(objData)
//     console.log("Read Data Successfully");
// });



//Create Simple API in NodeJS

//It is kind of routing 

//Events Module in NodeJS

// import EventEmitter from 'events';

// const event = new EventEmitter();

// event.on("checkPage",(sc,msg)=>{

//     console.log(`status code is ${sc} and the page is ${msg}`);

// });

// event.emit("checkPage",200,"ok"); 

