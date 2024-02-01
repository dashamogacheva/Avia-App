import {Routes, Route} from "react-router-dom";
import AviaPage from "../pages/Avia";
import InfoPage from "../pages/Info";
export default  () => (
    <Routes>
        <Route path='Avia-App' element={<AviaPage/>}/>
        <Route path='info' element={<InfoPage/>}/>
    </Routes>
);