import { useRef, useState, useEffect } from "react";
import axios from "axios";
import BookmarkList from "./BookmarkList";


function VideoPlayer() {


  const videoRef = useRef(null);


  const [bookmarks, setBookmarks] = useState([]);


  const [bookmarkName, setBookmarkName] = useState("");



  const videoId = "react-course-001";


  const API_URL = "http://localhost:5000/api/bookmarks";



  // Load bookmarks from MongoDB

  useEffect(() => {


    const fetchBookmarks = async () => {


      try {


        const response = await axios.get(
          `${API_URL}/${videoId}`
        );


        setBookmarks(response.data);


      } catch (error) {


        console.log(
          "Error loading bookmarks:",
          error
        );


      }


    };


    fetchBookmarks();


  }, []);





  // Add bookmark to MongoDB

  const addBookmark = async () => {


    if (!videoRef.current) return;



    const currentTime =
      videoRef.current.currentTime;



    const newBookmark = {


      videoId: videoId,


      name:
        bookmarkName ||
        `Bookmark ${bookmarks.length + 1}`,


      time: currentTime


    };



    try {


      const response = await axios.post(

        API_URL,

        newBookmark

      );



      setBookmarks([

        ...bookmarks,

        response.data

      ]);



      setBookmarkName("");



    } catch(error){


      console.log(
        "Error adding bookmark:",
        error
      );


    }


  };





  // Play from bookmark timestamp

  const playBookmark = (time) => {


    videoRef.current.currentTime = time;


    videoRef.current.play();


  };





  // Delete bookmark from MongoDB

  const deleteBookmark = async(id)=>{


    try{


      await axios.delete(

        `${API_URL}/${id}`

      );



      const updatedBookmarks =
        bookmarks.filter(

          bookmark =>
          bookmark._id !== id

        );



      setBookmarks(
        updatedBookmarks
      );



    }
    catch(error){


      console.log(
        "Delete error:",
        error
      );


    }


  };





  return (

    <div className="p-6">



      <h2 className="text-2xl font-bold mb-4">

        React Course Video

      </h2>





      <div className="relative">



        {/* Watermark */}

        <div

          className="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          text-white
          opacity-30
          text-3xl
          z-10
          rotate-[-25deg]
          pointer-events-none
          "

        >

          GVCC Learning Portal


        </div>





        <video

          ref={videoRef}

          controls

          className="w-full rounded-lg"

        >


          <source

            src="https://www.w3schools.com/html/mov_bbb.mp4"

            type="video/mp4"

          />


        </video>



      </div>





      <div className="mt-4 flex items-center">



        <input


          type="text"


          placeholder="Enter bookmark name"


          value={bookmarkName}


          onChange={(e)=>
            setBookmarkName(e.target.value)
          }


          className="
          border
          p-2
          rounded-lg
          mr-3
          "


        />





        <button


          onClick={addBookmark}


          className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-lg
          "


        >


          + Add Bookmark


        </button>



      </div>





      <BookmarkList


        bookmarks={bookmarks}


        onSelect={playBookmark}


        onDelete={deleteBookmark}


      />




    </div>


  );


}


export default VideoPlayer;