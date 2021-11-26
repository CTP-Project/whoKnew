import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Dashboard from './Dashboard'
import Avatar from "react-avatar"

export default function Attendance() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Dashboard/>
    //Keep this see what code is needed


    // <>
    //       <h2 className="text-left mb-4">Profile</h2>
    //       <Avatar googleId="118096717852922241760" size="100" round={true} />
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <strong>Email:</strong> {currentUser.email}
    //       <Link to="/update-profile" className="btn btn-primary w-0 mt-3">
    //         Update Profile
    //       </Link>
        
    //   <div className="w-100 text-center mt-2">
    //     <Button variant="link" onClick={handleLogout}>
    //       Log Out
    //     </Button>
    //   </div>
    // </>



//     <div class="wrapper">
//     <nav id="sidebar">
//         <div class="sidebar-avatar">
//         <Avatar githubHandle="sitebase" size={125} round="100px" /> 
//         <p className="px-4">Welcome</p>
//         </div>

//         <ul class="list-unstyled components">
            
//             <li class="active">
//                 <Link to="/">Dashboard</Link>
//             </li>
//             <li>
//                 <a href="#">Attendance</a>
//             </li>
            
//             <li>

//             <Link to="/profile">  Profile </Link>
//             </li>
//             <li>
//                   <div className="text-left">
//                         <Button variant="link" onClick={handleLogout}> Log Out  </Button>
//                   </div>
//             </li>
//         </ul>
//     </nav>
// <p>This is attendance</p>
// </div>



  )
}
