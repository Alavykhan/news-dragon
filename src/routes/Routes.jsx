import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import REgister from "../pages/Register/REgister";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "../pages/Shared/Terms&Conditions/TermsAndConditions";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            }, 
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<REgister/>
            },
            {
                path:'terms',
                element:<TermsAndConditions/>
            }
        ]
    },
    {
        path: 'category',
        element: <Main/>,
        children: [
            // {
            //     path: '/',
            //     element: <Category/>,
            //     loader: ()=>fetch ('http://localhost:5000/news')
            // },
            {
                path: ':id',
                element: <Category/>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout/>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;