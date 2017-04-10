### 关于ES6模块的说明

#### 1. 如果希望使用者不需要知道内部所定义的具体的方法/变量名(匿名导出), 可以使用`export default`语句. 参见`./module1.js`
 - 导出单一物件
 ```javascript
 // module.js
 export default function () {
   console.log('module1Func!');
 }
 // main.js
 import m1f1 from './module1'
 m1f1()
 ```
 - 引用时不可以使用对象解构
 ```javascript
 //module1.js
 export default {
   todo:'todo'
 }
 // main.js
 import {todo} from './module1' // error
 console.log(todo) // undefined

 import todo from './module1'
 console.log(todo.todo) // 'todo'
 ```

#### 2. 如果预先已经知道模块内部定义的方法/物件， 则可以使用`export`语句(`named export`). 会将导出的物件集合到一个对象中, 可以使用对象解构
 - 引用时只能使用对象解构
 ```javascript
 // module2.js
 export const m2f1 = function () {
   console.log('module2Func1!');
 }

 export const m2f2 = function () {
    console.log('module2Func2');
 }
 // main.js
 import {m2f1} from './module2'
 m2f1() // 'module2Func2'
 ```

#### 两种方法可以一起使用
 ```javascript
 // module3.js
 export default 'module3Default!'
 export const string = 'module3String!'

 // main.js
 import module3 from './module3'
 console.log(module3); // module3Default!

 import {string} from './module3' //
 console.log(string); // module3String!
 ```
