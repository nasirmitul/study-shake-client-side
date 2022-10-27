import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blogs/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/Courses/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/Error/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import ForgetPass from "../components/Forget/ForgetPass";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import CoursesLayout from "../layout/CoursesLayout";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

                loader: async () => {
                    return fetch('https://studyshake-server-side.vercel.app/courses')
                }
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: async () => {
                    return fetch('https://studyshake-server-side.vercel.app/courses')
                }
            },
            {
                path: '/courses',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: async () => {
                            return fetch('https://studyshake-server-side.vercel.app/courses')
                        }
                    },
                    {
                        path: '/courses/course/:course_id',
                        element: <CourseDetails></CourseDetails>,
                        loader: async ({ params }) => {
                            return fetch(`https://studyshake-server-side.vercel.app/courses/course/${params.course_id}`)
                        }
                    },
                    {
                        path: '/courses/course/checkout/:checkout_id',
                        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                        loader: async ({ params }) => {
                            return fetch(`https://studyshake-server-side.vercel.app/courses/course/checkout/${params.checkout_id}`)
                        }
                    }
                ]
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
        element: <ErrorPage></ErrorPage>
    }
])