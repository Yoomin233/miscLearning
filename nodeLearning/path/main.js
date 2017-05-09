const path = require('path')
console.log(path.normalize('../path/modules/../fs')) // ../path/fs

console.log(path.join(__dirname, '../', 'modules')) // /Users/litiantian/Personal/miscLearning/nodeLearning/modules
