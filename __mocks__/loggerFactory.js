const mockLog = jest.fn()
const mockDebug = jest.fn()
const mockInfo = jest.fn()
const mockWarn = jest.fn()
const mockError = jest.fn()

// We don't actually want to log anything to the console while testing, so let's mock the logger factory!
module.exports = () => {
  return {
    log: mockLog,
    debug: mockDebug,
    info: mockInfo,
    warn: mockWarn,
    error: mockError,
  }
}
