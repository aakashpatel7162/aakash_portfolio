import React from 'react'
import routes from './allroutes'
import { RouterProvider } from 'react-router-dom';
export default function RouteProvider() {
  return (
    <div>
        
        <RouterProvider router={routes}/>
    </div>
  )
}
