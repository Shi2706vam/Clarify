import { createBrowserRouter } from "react-router-dom";
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Services from '../pages/services/Services'
import Choose from '../pages/message/Choose'
import Contact from '../pages/contact/Contact'


export let myRoutes = createBrowserRouter([
    {
        path: "/*",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                index: "/services",
                element: <Services />
            },
            {
                index: "/whyus",
                element: <Choose />
            },
            {
                index: "/contact",
                element: <Contact />
            }
        ]

    }
])