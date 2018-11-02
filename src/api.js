const fetch = require('snekfetch')
const APIURL = "https://discordbots.org/api"

class DBL {
  /** 
    @param {APIOptions} [options] Options for the API.
    @param {Function} [callback] The function to be executed once this function is finished.
  */
  postCount(options, callback) {
    if (!options.token || !options.servercount || !options.botid || !callback) { 
      throw new RangeError("Missing Parameters.");
    }
    
    fetch.post(`https://${APIURL}/bot/${options.botid}/stats`)
    .set("Authorization", options.token)
    .send({count: options.servercount})
    .then(r => {
      callback("Successfully posted your count to DBL.")
    })
    .catch(err => {
      callback(new Error(err))
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
