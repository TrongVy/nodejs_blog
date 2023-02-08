const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
    res.send('hello truong trong vy')
})

app.listen(port, () => {
    console.log(`trong vy ${port}`)
})

// khởi tạo project : npm init
// tạo repository coppy đường link ..github
//tạo dòng hello server : vào trang chủ expressjs coppy vào chạy :V
// http://localhost:3000/trang-chu

// nodemon dùng để reload lại trang mà ko cần chạy lại ứng dụng
// cài đặt node mon :  npm i nodemon --save-dev  (--save-dev cài đặt trên môi trường dev để debug)
// thêm dòng  "start": "nodemon index.js", trong packege.json :  xem hướng dẫn trên trang nodemon npm