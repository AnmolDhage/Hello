import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import BottomNav from './components/bottomNav/bottomNav'


function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <BottomNav/>
    </>
  )
}

export default App
