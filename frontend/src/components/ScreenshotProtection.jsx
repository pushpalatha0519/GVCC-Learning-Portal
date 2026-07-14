import { useEffect } from "react";


function ScreenshotProtection(){

useEffect(()=>{


// Disable right click

const disableRightClick = (event)=>{

event.preventDefault();

};


document.addEventListener(
"contextmenu",
disableRightClick
);



// Block screenshot shortcuts

const blockScreenshot = (event)=>{


if(

event.key === "PrintScreen" ||

(event.ctrlKey && event.key === "s") ||

(event.ctrlKey && event.shiftKey && event.key === "s")

){

event.preventDefault();

alert(
"Screenshot is disabled while viewing learning content"
);

}


};


window.addEventListener(
"keydown",
blockScreenshot
);



return ()=>{


document.removeEventListener(
"contextmenu",
disableRightClick
);


window.removeEventListener(
"keydown",
blockScreenshot
);


};


},[]);



return null;


}


export default ScreenshotProtection;