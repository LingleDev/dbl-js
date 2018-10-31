const fetch = require('snekfetch')
const Constants = require('./misc/Constants')

class DBL {
  postCount(options = {}) {
    if (!options.token || !options.servercount) { 
      return throw new RangeError("Missing Parameters.")
      process.exit(666);
    }
    
    fetch.post(`https://${Constants.SCP}`)
  }
}
