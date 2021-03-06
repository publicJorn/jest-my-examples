// 1.
// The test passes while not using a mock file, but this takes a lot of system resources (see console)
// More importantly, it's not a unit test. If something is wrong in `myLib` the test for `code` will fail!
// That's why we mock it.
// Note, that since we use the answer property on `myLib` we need to provide it in our mock implementation
// jest.mock('../myLib', () => ({ answer: jest.fn() }))

// 2.
// If you uncommented the above line, you'll see that the first test fails.
// That's because `code` depends on `myLib.answer` to return a value of 42.
// Since we mocked it without returning a value, it won't return the expected value of 43.
// jest.mock('../myLib', () => ({ answer: () => 42 })) // or `answer: () => jest.fn(() => 42)`

// 3.
// If a manual mock file is present (guess what..) we don't need to write an implementation here;
// The manual mock will be used. We still need it to return 42 though, or the first test will fail.
jest.mock('../myLib')

// 4.
// We _need_ to mock the loggerFactory, because it's a factory...
// Otherwise both the code and the test create a separate instance of the logger and the spy won't capture the call!
// We use a manual mock file, because loggerFactory is likely to be used in other tests as well.
jest.mock('../loggerFactory')

const myLib = require('../myLib')
const logger = require('../loggerFactory')()
const code = require('../code')

describe('test tests', () => {
  it('code returns expected value', () => {
    const number = code.run()
    expect(number).toBe(43)
  })

  it('answer be called', () => {
    const answerSpy = jest.spyOn(myLib, 'answer')
    code.run()
    expect(answerSpy).toHaveBeenCalled()
  })

  it('logger be called', () => {
    const loggerSpy = jest.spyOn(logger, 'debug')
    code.run()
    expect(loggerSpy).toHaveBeenCalled()
  })
})
