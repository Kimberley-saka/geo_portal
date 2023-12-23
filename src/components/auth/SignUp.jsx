import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const submitUserData = (event) => {
    event.preventDefault();
    axios.post("http://localhost::8000/api/create/", {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    }).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <div className=" flex justify-center w-full pt-14">
      <form className="flex flex-col space-y-5" onScroll={submitUserData}>
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

        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(event => setConfirmPassword(event.target.value))}></input>

        <button className="w-72 h-8 rounded-full bg-sky-500 text-white" type="submit">
          Sign Up</button>

    
      </form>
    </div>
  )
}

export default SignUp
