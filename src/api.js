const fetch = require('snekfetch')
const APIURL = "https://discordbots.org/api"

class DBL {
  /** 
    @param {APIOptions} [options] Options for the API.
    @param {Function} [callback] The function to be executed once this function is finished.
  */
  postCount(options = {}, callback) {
    if (!this.options.token || !this.options.servercount || !this.options.botid || !this.callback) { 
      throw new RangeError("Missing Parameters.")
      process.exit(666);
    }
    
    fetch.post(`https://${APIURL}/bot/${this.options.botid}/stats`)
    .set("Authorization", this.options.token)
    .send({count: this.options.servercount})
    .then(r => {
      callback("Successfully posted your count to DBL.")
    })
    .catch(err => {
      callback(new Error(err))
    })
  }
  
  getUser(id, callback) {
    if (!this.id || !this.callback) throw new RangeError("Missing Parameters.") && process.exit(666);
    fetch.get(`https://${APIURL}/users/${id}`)
    .then(r => {
      const json = {
        username: `${r.body.username}#${r.body.discriminator}`,
        id: r.body.id,
        admin: Boolean(r.body.admin),
        webMod: Boolean(r.body.webMod)
      }
      callback(JSON.stringify(json))
    })
  }
  
  
}
