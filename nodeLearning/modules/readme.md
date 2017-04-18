#### node中的模块

#### 默认(匿名)导出:
```javascript
module.exports = object
```
导入:
```javascript
const moduleName = require('./module')
```
会导入模块的默认导出(对象)

相当于common JS中的`export default`

#### 具名导出
```javascript
exports.name = object
```
导入:
```javascript
const moduleName = require('./module')
moduleName.name
// or, using object destructing
const {name} = requre('./module')
name()
```
相当于common JS中的`export const varName`

参见`../../ES6Modules`

#### 多次加载缓存
模块加载时将会执行其内部的所有代码一次
重复引用同一模块只会引用指针, 不会导致重复运行模块代码
可以使用`require.cache`来查看已经被缓存的模块

##### 强制重新加载
如果希望二次加载和执行
可以使用`delete`操作符来删除已经加载的模块
```javascript
console.log(require.cache[require.resolve('./moduleName')])
delete require.cache[require.resolve('./moduleName')]
require('./moduleName') // reload!
```

#### 获取当前模块包含目录绝对路径和文件绝对路径
`__dirname`
`__filename`

#### `./`指当前路径, `/`指系统根目录(windows中为磁盘根目录), `~`指当前用户根目录

#### 引用模块时的寻找路径
1.  不带路径直接引用
1.1 会从当前目录下,　依次向上寻找`node_modules`中的包;
1.2 找不到时, 还会从系统变量中寻找相应的包
2.  带路径引用(`./moduleName.js`, `/usr/moduleName.js`等)

#### NPM api
  - 搜索安装类
    - `npm search name` 搜索包的相关信息
    - `npm view name`列出相关包的json信息
    - `npm install`, `npm install -g`  
    - `npm uninstall`, `npm update`
  - 查看类
    - `npm root`列出当前目录的包搜索目录(`./node_modules`); `-g`列出全局的包搜索目录(形如`C:\Users\admin\AppData\Roaming\npm\node_modules`)
    - `npm list`列出当前目录下已经安装的包; `-g`列出所有全局安装的包.
