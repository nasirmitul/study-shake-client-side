import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blogs/Blog";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import ForgetPass from "../components/Forget/ForgetPass";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Signin></Signin>
            },
            {
                path: '/forget',
                element: <ForgetPass></ForgetPass>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404 page</h1>
    }
])