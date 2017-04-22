// Example of a factory function
// Note that the mock will also need to return a function
module.exports = () => {
  return {
    log: console.log,
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
  }
}
