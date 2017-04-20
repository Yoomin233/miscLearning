#### 同步和异步
所有的操作文件目录方法都有同步和异步两种方法
大多数情况下使用异步方法
但少数情况, 例如读取配置文件, 可以使用同步方法

#### readFile, writeFile
```javascript
fs.readFile(fileName, [options,] cb)
fs.writeFile(fileName, content, [options,] cb)
```

#### 关于`readFile(fileName, options)`的`options`对象
`encoding`: 指定编码

`flag`: 写入/读取模式
  `a`: 追加
  `a+`: 不存在时创建该文件

#### 关于`options.mode`(同linux中的mode)

形式:`0XXX`

第一个数字必须为0
第二个数字表示文件或目录所有者的权限
第二个数字表示文件或目录所有者所属用户组的权限
第三个数字表示其它人的权限

`1`表示执行权限
`2`表示写权限
`4`表示读权限

当需要表示多个权限, 例如读写时, 使用加运算, 如`0666表示`所有人都有读写的权限

#### 打开文件, 返回文件描述符(文件句柄) - fs.open
`fs.open(fileName, flags, [options,], cb)`
得到文件描述符(`fileId`)后, 可以使用`fs.read`方法来从指定位置处读取文件到一个`buffer`对象
`fs.read(fileId, buffer, offset, length, position, cb(err, bytesRead, buffer))`
也可以使用`fs.write`方法来讲一个`buffer`对象写入到指定文件中

文件操作完毕后使用`fs.close(fileId, cb)`方法来关闭文件. 在关闭之前, 可以使用`fs.fsync`来将内存缓冲区中的数据写入文件, 以防止数据未来得及写入.

#### 目录操作
`fs.mkdir(path, [mode,] cb)`创建目录 - `fs.mkdir('./test', 0777, cb)`
`fs.readdir(path, cb)`读取目录 - `fs.readdir('./test', cb(err, files))`
`fs.rmdir(path, cb)`删除目录

#### 文件/目录信息: `fs.stat(path, cb(err, stats))`
`stats`对象的一些方法和属性:
  `isFile`,
  `isDirectory`,
  `atime` - access time,
  `mtime` - modify time,
  `ctime` - create time
如果已经获取了文件描述符, 则可以用`fs.fstat(fileId, cb)`来获取文件信息

#### 检查文件/目录是否存在 - `fs.exists(path, (ifExists) => {})`
使用方法: `fs.existsSync(path) || fs.mkdirSync(path)`

#### 重命名 - `fs.rename(old, new, cb(err))`

#### 监视文件/目录
`fs.watchFile(filename, [options,] listener(curr, prev))`用来监视文件
`options`中有`interval`属性, 用来指定每个多少毫秒来监视一次文件
`listener`函数`curr`的`prev`参数都是`fs.Stats`对象, 分别表示改变前, 改变后的文件

也可以使用`fs.watch(filename, [options,] [listener(event, filename)])`方法来监视文件或目录
该方法返回一个`fs.FSWatcher`对象, 可以调用其上的`close`方法来停止监视

#### 流
创建文件流:
`fs.createReadStream(path, [options])`
