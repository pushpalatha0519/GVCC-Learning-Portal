const express = require("express");

const router = express.Router();

const Bookmark = require("../models/Bookmark");



// Create bookmark

router.post("/", async(req,res)=>{

try{


const bookmark = await Bookmark.create(req.body);


res.status(201).json(bookmark);


}
catch(error){

res.status(500).json({
message:error.message
});

}

});




// Get bookmarks by video ID

router.get("/:videoId", async(req,res)=>{

try{


const bookmarks = await Bookmark.find({

videoId:req.params.videoId

});


res.json(bookmarks);


}
catch(error){

res.status(500).json({
message:error.message
});

}

});




// Delete bookmark

router.delete("/:id", async(req,res)=>{


try{


await Bookmark.findByIdAndDelete(
req.params.id
);


res.json({
message:"Bookmark deleted"
});


}
catch(error){

res.status(500).json({
message:error.message
});

}


});



module.exports = router;