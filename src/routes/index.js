const newRoutes = require("./news");
const siteRoutes = require("./site");
function route(app) {
    // đọc file home.hbs   : req là request (chứa các thông tin ứng dụng được gửi lên sever) , res là response (dữ liệu trả về)


    app.use('/news', newRoutes);
    app.use('/', siteRoutes);

 
}

module.exports = route;

