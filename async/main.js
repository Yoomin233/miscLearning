const EventEmitter = require('events')

// custom event emitter
class MyEmitter extends EventEmitter {
  constructor () {
    super()
    return this
  }
  all (...events) {
    let emittedCount = 0
    let cb = events.pop()
    let datas = {}
    events.forEach((event, i) => {
      this.on(event, (data) => {
        datas[event] = data
        emittedCount ++
        if (emittedCount === events.length) {
          cb(datas)
        }
      })
    })
  }
  tail (...events) {
    let emittedCount = 0
    let cb = events.pop()
    let datas = {}
    events.forEach((event, i) => {
      this.on(event, (data) => {
        datas[event] = data
        emittedCount ++
        if (emittedCount >= events.length) {
          emittedCount --
          cb(datas)
        }
      })
    })
  }
  done (eventName) {
    return (data) => {
      this.emit(eventName, data)
    }
  }
}


const myEmitter = new MyEmitter()

myEmitter.all('data1', 'data2', 'data3', (data) => {
  console.log(data)
})
myEmitter.tail('data1', 'data2', 'data3', (data) => {
  console.log(data)
})
myEmitter.on('event1', (data) => {
  console.log(data)
})

// setTimeout(() => myEmitter.emit('data1', 'payload1'), 500)
// setTimeout(() => myEmitter.emit('data2', 'payload2'), 600)
// setTimeout(() => myEmitter.emit('data3', 'payload3'), 700)
// setTimeout(() => myEmitter.emit('data3', 'payload4'), 800)
// setTimeout(() => myEmitter.emit('data3', 'payload5'), 900)

// setTimeout(myEmitter.done('event1'), 1000, 'event1Data')

// promise
