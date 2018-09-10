var studentData = [];
module.exports = function (app) {

    app.post("/api/newstudent", function (req, res) {
        console.log(req.body);

        studentData.push(req.body);


    })

    app.get("/api/newstudent", function (req, res) {
        // console.log(req.body);

        res.json(studentData);


    })

}