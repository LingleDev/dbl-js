console.log("You are using dbl-api v1.0.0 by FHGDev.")
const api = new (require('./src/api.js'))()
const options = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI5NDE5NDUwNjExMzIyMDYwOCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTQwODI5Mjc4fQ.agZMsjRNQLU4KRNv9iLGMMSfIkPfKfU5Z3SV4zGP4Pg",
  servercount: 500,
  botid: 294194506113220608
}

api.postCount(options, console.log)
