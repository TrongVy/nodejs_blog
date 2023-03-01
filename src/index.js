const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;
const path = require('path');
const route = require('./routes');
// đọc các file trong thư mục public (http://localhost:3000/img/logo.png   : kiểm tra file có trong đường dẫn)
app.use(express.static(path.join(__dirname, "public")));
// midllewe để sử lý dữ liệu của form
app.use(express.urlencoded());
app.use(express.json());
// logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}));

app.set('view engine', 'hbs');
// cấu trúc lại thư mục folder
app.set('views', path.join(__dirname, './resources/views'));


// router init
route(app);

app.listen(port, () => { 
    console.log(`trong vy ${port}`)
});


// khởi tạo project : npm init
// tạo repository coppy đường link ..github
//tạo dòng hello server : vào trang chủ expressjs coppy vào chạy :V
// http://localhost:3000/trang-chu

// + nodemon dùng để reload lại trang mà ko cần chạy lại ứng dụng
// + cài đặt node mon :  npm i nodemon --save-dev  (--save-dev cài đặt trên môi trường dev để debug)
// + thêm dòng  "start": "nodemon index.js", trong packege.json :  xem hướng dẫn trên trang nodemon npm
// + cài đặt morgan : xem các request gửi lên sever : npm i --save-dev
// + cài đặt handlebar
// + trong hanlerbar : cấu trúc lại thư mục lên express-handlebars , sữa lại tên handlebars => đuôi .hbs, partials (header,footer)
// + Static files
// + node-sass npm : cấu hình chuyển đổi file scss thành css trong package.json (npm run watch)
// + tạo file nodemon.json để lắng nghe sự thay đổi của các file
// + routing :
// + Query parameters : ???  ô input nào có name khi bấm submit form nó sẽ truyền lên url
// + Form default behavior
// + phương thức post khi gửi dữ liệu sẽ ko đính lên url, tạo một app.post('/search', (req, res) => {
//   res.send('');
//  });