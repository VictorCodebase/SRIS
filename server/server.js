const express = require('express')
const app = express()
port = 5000
// Should you change the port number, make sure to update it in the client
// change   "proxy": "http://localhost:5000" in client/package.json to   "proxy": "http://localhost:<port></port>"

app.get("/api", (req, res) => {
    res.json({
        "Server response" : "Hello, youve reached the server"
    })
})

app.listen(port, ()=>{
    console.log("server running on port ", port)
})