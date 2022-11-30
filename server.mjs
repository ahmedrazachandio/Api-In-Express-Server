// const express = require('express')
console.log("i am server file");
import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("request ip:",req.ip);
  res.send('Hello World' + new Date().toDateString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})