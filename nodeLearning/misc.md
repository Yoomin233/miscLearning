#### REPL
`.help` for common REPL commands

`.exit` for exiting REPL

`.load`, `.save` for loading / saving REPL sessions

`_` for prev output

#### console log
重定向`stdout`(console.log):
```javascript
node app.js 1>./logFile.txt
```
重定向`stdError`(console.errpr):
```javascript
node app.js 2>./logFile.txt
```
此外还有`console.trace, console.assert, console.time, console.timeEnd`等方法, 用法同chrome控制台

#### debug
 `node --inspect main.js` or `node --debug main.js`
 此外还有 `node-inspector`等工具
 
