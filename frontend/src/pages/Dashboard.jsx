import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";


function Dashboard(){

const courses=[
{
id:1,
title:"React Full Stack Development",
description:"Learn React, Components and Hooks",
image:"https://via.placeholder.com/300"
},
{
id:2,
title:"Java Backend Development",
description:"Learn Java, Spring Boot and APIs",
image:"https://via.placeholder.com/300"
},
{
id:3,
title:"Generative AI Basics",
description:"Learn AI, LLM and RAG concepts",
image:"https://via.placeholder.com/300"
}
];


return(

<div className="min-h-screen bg-gray-100">

<Navbar/>


<div className="p-8">

<h2 className="text-3xl font-bold mb-6">
My Courses
</h2>


<div className="grid md:grid-cols-3 gap-6">


{
courses.map(course=>(

<VideoCard 
key={course.id}
course={course}
/>

))
}


</div>


</div>

</div>

)

}


export default Dashboard;