### formatting log info
```javascript
console.log('%cFormatting log!', 'background-color: red;color: yellow;')
console.log('%cFormatting %csubStrings!', 'color: red', 'color: blue')
```

### trace call stack
```javascript
console.trace()
```

### monitor function args, debug when specific function are called
```javascript
monitor(funcName)
debug(funcName)
funcName()
```

### asseration
```javascript
console.assert(condition, message)
// example
console.assert(false, 'assertion failed!')
```

### time count
```javascript
console.time(name)
console.timeEnd(name)
// example
console.time('total');
console.time('init arr');
var arr = new Array(10000);
console.timeEnd('init arr');
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Object();
}
console.timeEnd('total');
// init arr: 0.0546875ms
// total: 2.5419921875ms
```
