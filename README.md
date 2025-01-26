# CompleteNodeJS

# Node.js Examples Repository

This repository contains various examples and use cases of Node.js core modules, npm packages, and functionalities. Below is an overview of the key implementations and features covered in this code.

---

## File System (fs) Module

### Synchronous Operations
- **Create a file**: `fs.writeFileSync('file.txt', 'Content')`
- **Append data**: `fs.appendFileSync('file.txt', ' Additional Content')`
- **Read file**: `fs.readFileSync('file.txt', 'utf8')`
- **Rename file**: `fs.renameSync('oldName.txt', 'newName.txt')`
- **Create directory**: `fs.mkdirSync('DirectoryName')`
- **Delete file**: `fs.unlinkSync('fileName.txt')`
- **Remove directory**: `fs.rmdirSync('DirectoryName')`

### Asynchronous Operations
- **Create a file**:
  ```javascript
  fs.writeFile('file.txt', 'Content', (err) => {
      if (err) console.error(err);
      console.log('File created');
  });
  ```
- **Append data**:
  ```javascript
  fs.appendFile('file.txt', '\nAppended Content', (err) => {
      if (err) console.error(err);
      console.log('Data appended');
  });
  ```
- **Read file**:
  ```javascript
  fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) console.error(err);
      console.log(data);
  });
  ```
- **Delete file**: `fs.unlink('file.txt', (err) => console.log('File deleted'))`

---

## Operating System (os) Module
- **Architecture**: `os.arch()`
- **Free memory (GB)**: `os.freemem() / 1024 / 1024 / 1024`
- **Total memory (GB)**: `os.totalmem() / 1024 / 1024 / 1024`
- **Hostname**: `os.hostname()`
- **Platform**: `os.platform()`

---

## Path Module
- **Directory name**: `path.dirname('path/to/file.js')`
- **File extension**: `path.extname('path/to/file.js')`
- **Base name**: `path.basename('path/to/file.js')`
- **Parse path**: `path.parse('path/to/file.js')`

---

## Custom Modules
- **Export syntax**:
  ```javascript
  module.exports = { functionName, variableName };
  ```
- **Import syntax**:
  ```javascript
  const { functionName } = require('./modulePath');
  ```

---

## NPM Packages
- **chalk**: Style console output.
  ```javascript
  import chalk from 'chalk';
  console.log(chalk.bgBlue.underline('Styled Text'));
  ```
- **validator**: Validate data (e.g., email).
  ```javascript
  import validator from 'validator';
  const isValid = validator.isEmail('example@gmail.com');
  console.log(isValid ? chalk.green('Valid Email') : chalk.red('Invalid Email'));
  ```

---

## HTTP Module

### Create a Web Server
```javascript
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello from the server');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on port 3000');
});
```

### Basic Routing
```javascript
const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.end('Contact Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Page Not Found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening on port 8000');
});
```

---

## JSON Handling
- **Convert object to JSON**: `JSON.stringify(object)`
- **Convert JSON to object**: `JSON.parse(jsonString)`
- **File operations with JSON**:
  ```javascript
  const data = JSON.stringify({ key: 'value' });
  fs.writeFile('file.json', data, (err) => {
      if (!err) console.log('JSON data written');
  });

  fs.readFile('file.json', 'utf8', (err, data) => {
      const obj = JSON.parse(data);
      console.log(obj);
  });
  ```

---

## Events Module
- **Create and listen to events**:
  ```javascript
  import EventEmitter from 'events';

  const event = new EventEmitter();

  event.on('eventName', (arg1, arg2) => {
      console.log(`Event triggered with ${arg1} and ${arg2}`);
  });

  event.emit('eventName', 'argument1', 'argument2');
  ```

---

## Module Wrapper Function
Node.js wraps every module with a function:
```javascript
(function (exports, require, module, __filename, __dirname) {
    // Module code here
});
```

---

## API Example
A simple API demonstration is included, showcasing routing and event handling to build the foundation for dynamic applications.

---

### How to Use
1. Clone the repository.
2. Run `npm install` to install any necessary packages.
3. Execute specific scripts with `node filename.js`.

### Author
Dabhi Rajdeepsinh

---

Feel free to contribute or raise issues to improve this repository!

