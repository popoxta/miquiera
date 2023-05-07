import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import CartProvider from "./context.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>} id={'root'}>
        <Route index element={<Home/>}/>
        <Route path={'shop'}>
            <Route index element={<Shop/>}/>
            <Route path={':id'} element={<Product/>}/>
        </Route>
    </Route>
))

function App() {
    return (
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    )
}

export default App
