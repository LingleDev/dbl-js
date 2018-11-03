console.log("You are using dbl-api v1.0.0 by FHGDev.")
const api = new (require('./src/api.js'))()
const options = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5NDE5NDUwNjExMzIyMDYwOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQxMTg1NjUzfQ._TessLPX4BXk8IGIRN3sCXuh9_3Cqzg1gd8EwDkt4JA",
  servercount: 500,
  botid: 294194506113220608
}

api.postCount(options, console.log)
 
