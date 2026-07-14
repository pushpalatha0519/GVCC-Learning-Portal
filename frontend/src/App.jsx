import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import VideoPage from "./pages/VideoPage";
import ScreenshotProtection from "./components/ScreenshotProtection";


function App(){

return(

<BrowserRouter>

<ScreenshotProtection />

<Routes>

<Route 
path="/" 
element={<Dashboard/>}
/>


<Route 
path="/video" 
element={<VideoPage/>}
/>


</Routes>

</BrowserRouter>

)

}


export default App;