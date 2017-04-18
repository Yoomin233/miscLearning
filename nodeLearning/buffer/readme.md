`buffer`具有的`slice`方法可以划分出一段共享内存
对划分出的`subBuffer`进行操作, 也会改变原`buffer`的数据
因为是划分出的`subbBuffer`只是一段指针

#### api
##### 字符串
`buffer.toString()`转换为字符串

##### 整数
`buffer.readUInt8(0)`读取`buffer`第`0`位的数值为8位无符号整数(以及所有的`read`方法)
`buffer.writeUInt8(0)`写入到`buffer`对象

##### json
`JSON.stringify` and `JSON.parse`
