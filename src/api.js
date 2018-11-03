const fetch = require('snekfetch')

class DBL {
  /** 
    @param {APIOptions} [options] Options for the API.
    @param {Function} [callback] The function to be executed once this function is finished.
  */
  postCount(options, callback) {
    const botid = options.botid
    if (!options.token || !options.servercount || !botid || !callback) { 
      throw new RangeError("Missing Parameters.");
    }
    
    fetch.post(`https://discordbots.org/api/bots/stats`)
    .set("Authorization", options.token)
    .send({server_count: options.servercount})
    .then(r => {
      callback("Successfully posted your count to DBL.")
    })
    .catch(err => {
      callback(console.log(err)) 
    })
  }
  
  getUser(id, callback) {
    if (!id || !callback) throw new RangeError("Missing Parameters.");
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

module.exports = DBL
