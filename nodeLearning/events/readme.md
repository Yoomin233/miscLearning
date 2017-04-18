```javascript
const server = require('http').createServer()
server
.on('request', (req, res) => {
  console.log(req.url)
  res.end('OK')
})
.listen(1337, 'localhost')
```

`server`是继承自`EventEmitter`的一个实例对象

与`EventEmitter`相关的方法有
`on`, `addEventListener`, `once`, `listeners`等

#### 如果想要手动触发事件, 可以使用
`listener.emit(eventName, ...params)`方法
例如:
```javascript
server.on('request'， // code...)
server.emit('request', {
  url: '333'
}, {
  end: function (str) {
    console.log(str)
  }
})
```
