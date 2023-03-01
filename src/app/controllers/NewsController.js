class NewsControllers {
    // [GET]  /news
    index(req, res) {
        res.render("new")
    }

    // [GET]  /news/:SLug
    show(req, res) {
        res.send("New Detail")
    }

}

module.exports = new NewsControllers;