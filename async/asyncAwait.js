function timerPromise (val, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay, val)
  })
}
async function asyncFunc () {
  // var val1 = await timerPromise(10, 500)
  // var val2 = await timerPromise(20, 500)
  let results = await Promise.all([timerPromise(10, 500), timerPromise(20, 300)])
  console.log(results)
}
asyncFunc()
