const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();


// Middleware
app.use(cors());

app.use(express.json());



// MongoDB Connection

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB Connected");

})

.catch((error)=>{

    console.log("MongoDB Connection Error:", error);

});




// Bookmark Routes

const bookmarkRoutes = require("./routes/bookmarkRoutes");


app.use(
    "/api/bookmarks",
    bookmarkRoutes
);




// Test API

app.get("/", (req, res)=>{

    res.send("GVCC Learning Portal Backend Running");

});




// Server Port

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});