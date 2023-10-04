import {createBrowserRouter} from "react-router-dom";
import AviaPage from "../pages/Avia/AviaPage";
import InfoPage from "../pages/Info/InfoPage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <AviaPage/>
    },
    {
        path: '/info',
        element: <InfoPage/>
    }
]);