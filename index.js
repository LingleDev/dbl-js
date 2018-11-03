console.log("You are using dbl-api v1.0.0 by FHGDev.")
const api = new (require('./src/api.js'))()
const options = {
  token: process.env.token,
  servercount: 18,
  botid: 294194506113220608
}

api.postCount(options, console.log)
 
