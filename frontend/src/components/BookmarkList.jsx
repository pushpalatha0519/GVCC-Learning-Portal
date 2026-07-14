function BookmarkList({bookmarks,onSelect}){


return(

<div className="mt-6">


<h3 className="text-xl font-bold">
My Bookmarks
</h3>


{

bookmarks.map((bookmark)=>(


<div

key={bookmark.id}

className="bg-gray-200 p-3 mt-3 rounded-lg flex justify-between"


>


<div>

<p>{bookmark.name}</p>

<p>
{formatTime(bookmark.time)}
</p>

</div>



<button

onClick={()=>onSelect(bookmark.time)}

className="bg-green-600 text-white px-3 py-1 rounded"

>

Play

</button>


</div>


))

}


</div>

)

}



function formatTime(seconds){


const minutes=Math.floor(seconds/60);

const secs=Math.floor(seconds%60);


return `${minutes}:${secs<10?"0":""}${secs}`;


}


export default BookmarkList;