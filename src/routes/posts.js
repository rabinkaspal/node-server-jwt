const router = require("express").Router();
const verify = require("./verifyToken");

//apply verify as middleware to verify token
router.get("/", verify, async (req, res) => {
    //res.send(req.user)  //_id: 624ad0f545cf34b603ec1c5e
    res.json({
        posts: [
            {
                title: "first post",
                desc: "some desCription for valid users",
            },
            {
                title: "second post for the day",
                desc: "New description",
            },
        ],
    });
});

module.exports = router;
