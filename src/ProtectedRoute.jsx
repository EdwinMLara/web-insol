import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./Context/AuthContext"

function ProtectedRoute() {
    const {loading, isAuthenticated} = useAuth()
    if(loading) return <h1>Loading...</h1>
    if(!loading && !isAuthenticated) return <Navigate to={'/web-insol/login'} replace />
  return (
    <Outlet/>
  )
}

export default ProtectedRoute