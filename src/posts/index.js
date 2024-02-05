const express = require('express')
const app = express()

const posts = []

app.get('/posts', (req, res) => {
    res.send("test")
})

app.post('/posts', (req, res) => {
    const id = crypto.randomBytes(64).toString('hex');
    console.log(req);
    posts.push({id, req})
    res.status(201).send()
})

app.listen(4000, () => {
    console.log("listening on port 4000")
})