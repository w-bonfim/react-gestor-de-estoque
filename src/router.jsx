import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CreateItem from "./pages/items/CreateItem";
import UpdateItem from "./pages/items/UpdateItem";
import ShowItem from "./pages/items/ShowItem";
import ItemLayout from "./pages/items/ItemLayout";
import ListItem from "./pages/items/ListItem";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        { index: true, element: <Home />},
        { 
            path: "items",
            element: <ItemLayout />,
            children: [
                {index: true, element: <ListItem /> },
                {path: "new", element: <CreateItem /> },
                {path: ":id", element: <ShowItem /> },
                {path: ":id/update", element: <UpdateItem /> }
            ]
        }
        
    ]
}])

export default router