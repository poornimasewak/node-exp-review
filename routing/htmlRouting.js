var path = require("path");

module.exports = function (app) {

    app.get("/jorge", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/newStudent.html"));
    })

}