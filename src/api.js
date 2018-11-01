const fetch = require('snekfetch')
const Constants = require('./misc/Constants')

class DBL {
  /** 
    @param {APIOptions} [options] Options for the API.
    @param {Function} [callback] The function to be executed once this function is finished.
  */
  postCount(options = {}, callback) {
    if (!this.options.token || !this.options.servercount) { 
      return throw new RangeError("Missing Parameters.")
      process.exit(666);
    }
    
    fetch.post(`https://${Constants.SCP}`)
  }
}
