import { useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {setUser} = useContext(UserContext)

  const navigate = useNavigate();

  const logInUser = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/api/token/", {
      email,
      password,
    })
    .then((response) => {
      const decodedAccessToken = jwtDecode(response.data.access);
      setUser({firstName: decodedAccessToken.firstName, lastName: decodedAccessToken.lastName});
      navigate("/");
    })
    .catch((error) => console.log(error))
}
  return (
    <div className=" flex justify-center w-full md:pt-24">
      <form className="flex flex-col justify-center items-center space-y-6" onSubmit={logInUser}>
        <input className="outline-none px-8 w-58 h-9 rounded-full shadow-sm shadow-sky-300
        md:w-72"
        type="email"
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}></input>

        <input className="outline-none h-9 px-8 rounded-full shadow-sm shadow-sky-300
        md:w-72"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}></input>

        <div className="flex flex-row space-x-6">
          <div className="flex items-center space-x-2">
            <input className="outline-none border-none" type="checkbox"></input>
            <p className="text-gray-500">Remember me</p>
          </div>
          <a href="#" className="text-sky-500 cursor-pointer">Forgot password?</a>
        </div>

        <button className="w-full h-9 rounded-full bg-sky-500 text-white" type="submit">
          Login</button>

        
      
      </form>
    </div>
  )
}

export default Login
