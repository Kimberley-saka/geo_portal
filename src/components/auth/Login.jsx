
function Login() {
  return (
    <div className=" flex justify-center w-full pt-24">
      <form className="flex flex-col space-y-6">
        <input className=" outline-none px-8 w-72 h-9 rounded-full shadow-sm shadow-sky-300" type="email" 
        placeholder="Email"></input>
        <input className="outline-none w-72 h-9 px-8 rounded-full shadow-sm shadow-sky-300" type="password"
        placeholder="Password"></input>

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
