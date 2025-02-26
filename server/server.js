const express = require('express')
const app = express()
port = 5000

app.get("/api", (req, res) => {
    res.json({
        "Server response" : "Hello, youve reached the server"
    })
})

app.listen(port, ()=>{
    console.log("server running on port ", port)
})