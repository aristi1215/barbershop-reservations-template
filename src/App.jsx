import './App.css'
import { Landing } from './pages/Landing.jsx'
import {AdminBooking} from './admin/pages/AdminBooking.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { ReservationsProvider } from './context/ReservationsContext.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/admin/home',
    element: <AdminBooking />
  }
])

function App() {

  return (
    <AuthContextProvider>
      <ReservationsProvider>
      <RouterProvider router={routes} />
      </ReservationsProvider>
    </AuthContextProvider>
  )
}

export default App
