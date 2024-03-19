const app = require("express")()
const crypto = require("crypto")
const cors = require("cors")
const bodyParser = require("body-parser")
// const app = new express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors)
let postData = {}

//create a get api to get all posts
app.get("/posts/:id/comments", function(req, res) {
    console.log("req", req.params, postData)
    res.send(postData[req.params.id] || [])
})

//create a post api to create a post
app.post("/posts/:id/comments", function(req, res) {
    //recieve cmts from post body
    const { content } = req.body;
    //to create cmtId for each new comments
    const commentId = crypto.randomBytes(4).toString('hex');
    // if particular post exist get assign postData[req.params.id] else [] for a new post
    let cmmtsList = postData[req.params.id] || []
    //push new comments with id and cmts inside cmts array
    cmmtsList.push({ "id": commentId, content});
    // assign update cmts arr to 
    postData[req.params.id] = cmmtsList
    res.status(201).send(cmmtsList)
})
app.listen(5000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port 5000");
})