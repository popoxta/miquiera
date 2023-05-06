import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path={'shop'}>
            <Route index element={<Shop/>}/>
        </Route>

    </Route>
))


function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
