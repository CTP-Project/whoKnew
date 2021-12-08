import React, { useState,useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";
import Avatar from "react-avatar";
import { SidebarData } from "./SidebarData";
import "./CSS/Profile.css";

export default function Profile() {
	const [error, setError] = useState("");
  const [value, setValue] = useState("")
	const [aboutmeText, setaboutmeText] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to log out");
		}
	}
	//------- api ----
	//define the about me routes
	// get route and post route
	//about me contoller
	// about me model

	// ---- front end
	//now front end call
	//get route the info
	//post to save the info

	async function handleAboutme(event) {
		setError("");
		try {
			//read the user input
			// console.log(currentUser)
			fetch("http://localhost:8080/api/aboutme", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					aboutme: value,
					uid: currentUser.uid,
				}),
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((err) => {
					setError("Failed to create an about me ");
				});
			// update the databse

			// display on web
			// history.push("/Profile");
			// console.log(currentUser);???
		} catch {
			setError("Failed to create an about me ");
		}
	} //add an event listen set it to the state set the event tatget to that state

	async function editAboutme(event) {
		setError("");
		try {
			//read the user input
			// console.log(currentUser)
			fetch(`http://localhost:8080/api/aboutme/${currentUser.uid}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					aboutme: value,
					uid: currentUser.uid,
				}),
			})
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((err) => {
					setError("Failed to create an about me ");
				});
			// update the databse

			// display on web
			// history.push("/Profile");
			// console.log(currentUser);???
		} catch {
			setError("Failed to create an about me ");
		}
	} //add an event listen set it to the state set the event tatget to that state

	async function GetAboutme(event) {
		setError("");
		try {
			//read the user input
			// console.log(currentUser)
			fetch(`http://localhost:8080/api/aboutme/${currentUser.uid}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				// body: JSON.stringify({
				// 	aboutme: aboutmeText,
				// 	uid: currentUser.uid,
				// }),
			})
				.then((response) => response.json())
				.then((data) => setaboutmeText(
          data[0].aboutme
        ))
				.catch((err) => {
					setError("Failed to create an about me ");
				});
			// update the databse

			// display on web
			// history.push("/Profile");
			// console.log(currentUser);???
		} catch {
			setError("Failed to create an about me ");
		}
	}
useEffect(()=>{
  GetAboutme()
},[])
	return (
		<div className="Wrapper">
			<Dashboard />
			<div className="MainColumn">
				{/* <Avatar googleId="118096717852922241760" size="100" round={true} /> */}
				{error && <Alert variant="danger">{error}</Alert>}
				{/* <div className="email">Email: {currentUser?.email || "no user"}</div> */}
					<label>
						<h1 className="AboutMeTitle">About Me:</h1>
            <p className="AboutMEInfo">{aboutmeText}</p>
						<textarea className="TextArea"
							onChange={(event) => setValue(event.target.value)}
							value={value}
              placeholder={aboutmeText}
							id="about"
							type="text"
							name="about"
						/>
					</label>
          <div className="StyleBtn">
					<button className="createAboutMe" onClick={handleAboutme}>create about me </button>
					<button className="editAboutMe" onClick={editAboutme}>edit about me </button>
          </div>
					
          <Link to="/update-profile" className="button">
						Update Profile
					</Link>
          {/* <h2 className="AboutMEInfo">{aboutmeText}</h2> */}
				
			</div>
		</div>

		//       <>
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
	);
}
