import express from 'express'
//const express = require('express')

const app = express();
const PORT = process.env.PORT || 3001

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("./client/build"))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json)

app.listen(PORT, () => {
    console.log(`Back-End Server started at http://localhost:${PORT}`)
})