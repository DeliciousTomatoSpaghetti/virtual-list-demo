import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider,RouteObject } from 'react-router-dom'

import Root from './route/Root.tsx'
import ListOne from './components/list1/ListOne.tsx'
import ListTwo from './components/list2/ListTwo.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"virtual-list-1",
        element:<ListOne/>,
      },
      {
        path:"virtual-list-2",
        element:<ListTwo/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
