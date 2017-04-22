module.exports = {
  // Some complex function we don't care about in the unit test for code.js
  answer: () => {
    console.log('OH NO WE NOW HAVE TO DO SOME VERY HEAVY PROCESSING IN ORDER TO GET _THE_ ANSWER!!')
    return 21 + 21
  }
}
