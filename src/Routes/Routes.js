import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blogs/Blog";
import Course from "../components/Courses/Course";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import ForgetPass from "../components/Forget/ForgetPass";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
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
                element: <Home></Home>,

                loader: async () => {
                    return fetch('http://localhost:5000/courses')
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: async () => {
                    return fetch('http://localhost:5000/courses')
                }
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: async () => {
                    return fetch('http://localhost:5000/courses')
                }
            },
            {
                path: '/courses/course/:course_id',
                element: <CourseDetails></CourseDetails>,
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/courses/course/${params.course_id}`)
                }
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
                path: '/profile',
                element: <Profile></Profile>
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