import { useState } from "react"
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logInUser = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/token/"), {
      email,
      password,
  }.then((response) => {
    console.log(response.data);
  });
}
  return (
    <div className=" flex justify-center w-full pt-24">
      <form className="flex flex-col space-y-6" onSubmit={logInUser}>
        <input className=" outline-none px-8 w-72 h-9 rounded-full shadow-sm shadow-sky-300"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}></input>

        <input className="outline-none w-72 h-9 px-8 rounded-full shadow-sm shadow-sky-300"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}></input>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <input className="outline-none border-none" type="checkbox"></input>
            <p className="text-gray-500">Remember me</p>
          </div>
          <a href="#" className="text-sky-500 cursor-pointer">Forgot password?</a>
        </div>

        <button className="w-72 h-9 rounded-full bg-sky-500 text-white" type="submit">
          Login</button>
      
      </form>
    </div>
  )
}

export default Login
