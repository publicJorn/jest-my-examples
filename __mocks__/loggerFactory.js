const mockLog = jest.fn()

// We don't actually want to log anything to the console while testing, so let's mock the logger factory!
module.exports = () => {
  return {
    log: mockLog,
    debug: mockLog,
    info: mockLog,
    warn: mockLog,
    error: mockLog,
  }
}
