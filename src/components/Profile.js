import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import Avatar from "react-avatar"



export default function Profile() {

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
        <>
        <h2 className="text-left mb-4">Profile</h2>
        <Avatar googleId="118096717852922241760" size="100" round={true} />
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-0 mt-3">
          Update Profile
        </Link>
      
    <div className="w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  </>
    )
}