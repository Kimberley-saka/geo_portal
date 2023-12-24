import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitUserData = (event) => {
    event.preventDefault();

    //Chack for valid email

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email");
      return;
    }

    //check for valid password
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    axios.post("http://localhost:8000/api/create/", {
      firstName,
      lastName,
      email,
      password,
    });
  }
  return (
    <div className=" flex justify-center w-full pt-14">
      <form className="flex flex-col space-y-5" onSubmit={submitUserData}>
        <input className=" outline-none px-8 w-72 h-8 rounded-full shadow-sm shadow-sky-300" 
        type="text" 
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}></input>
        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event => setLastName(event.target.value))}></input>

        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event => setEmail(event.target.value))}></input>
        
        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}></input>


        <button className="w-72 h-8 rounded-full bg-sky-500 text-white" type="submit">
          Sign Up</button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  )
}

export default SignUp
