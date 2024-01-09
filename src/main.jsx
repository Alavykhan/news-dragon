import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider';
import router from './routes/routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </>,
)
