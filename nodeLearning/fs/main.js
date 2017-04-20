const fs = require('fs')

fs.readFile('./index.html', 'utf8', (err, data) => {
  // console.log(data)
})

fs.writeFile('./temo.txt', '\r\nthis is a string', {
  encoding: 'utf8',
  flag: 'a'
}, (err) => {
  // console.log(err)
})

fs.open('./temo.txt', 'r', (err, id) => {
  // console.log(id)
  let buf = new Buffer(255)
  fs.read(id, buf, 0, 9, 3, (err, bytesRead, buffer) => {
    // console.log(buffer.toString())
  })
})

// fs.mkdir('./test', 0770, (err) => console.log(err))

fs.stat('./index.html', (err, stats) => {
  // debugger
  // console.log(stats)
})

fs.exists('./main.js', (ifExists) => {
  // console.log(ifExists);
})

// fs.rename('index2.html', 'index.html', (err) => {if (err) throw err})

// fs.watch('./', (...args) => {
//   console.log(...args)
// })

let fileStream = fs.createReadStream('./temo.txt', {
  flags: 'r',
  encoding: 'utf8'
})
fileStream.on('open', (fd) => console.log('开始读取'))

fileStream.on('data', (data) => {
  console.log('receiving data');
  console.log(data)
})

fileStream.on('end', () => console.log('读取完毕'))

fileStream.on('close', () => console.log('文件关闭'))
