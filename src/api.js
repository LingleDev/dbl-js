const fetch = require('snekfetch')
const Constants = require('./misc/Constants')

class DBL {
  /** 
    @param {} [options]
  */
  postCount(options = {}) {
    if (!this.options.token || !this.options.servercount) { 
      return throw new RangeError("Missing Parameters.")
      process.exit(666);
    }
    
    fetch.post(`https://${Constants.SCP}`)
  }
}
