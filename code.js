const myLib = require('./myLib')
const logger = require('./loggerFactory')()

module.exports = {
  run: () => {
    logger.debug('Log this! We be giving the answer +1.')
    return myLib.answer() + 1
  }
}
