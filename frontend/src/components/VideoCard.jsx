import { useNavigate } from "react-router-dom";


function VideoCard({course}){


const navigate = useNavigate();


return(

<div className="bg-white rounded-xl shadow-md p-4">


<img
src={course.image}
alt={course.title}
className="rounded-lg w-full"
/>


<h3 className="text-xl font-bold mt-4">
{course.title}
</h3>


<p className="text-gray-600 mt-2">
{course.description}
</p>



<button

onClick={()=>navigate("/video")}

className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"

>

Watch Now

</button>


</div>

)

}


export default VideoCard;