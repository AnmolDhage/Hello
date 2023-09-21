import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HelloPage from './pages/helloPage/helloPage.jsx'
import ErrorPage from './pages/errorPage/errorPage.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement= {<ErrorPage />}  >
    
   <Route path='' element={<HelloPage/>} />
   <Route path='/link/:id' element={<HelloPage/>} />
   
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
