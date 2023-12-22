
function Login() {
  return (
    <div className=" flex px-4 pt-24">
      <form className="flex flex-col space-y-6">
        <input className="w-72 h-9 placeholder:pl-8 rounded-full" type="email" placeholder="Email"></input>
        <input className="w-72 h-9 placeholder:pl-8 rounded-full" type="password" placeholder="Password"></input>

        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <input type="checkbox"></input>
            <p>Remember me</p>
          </div>
          <p className="text-sky-500 cursor-pointer">Forgot password?</p>
        </div>

        <button className="w-72 h-9 rounded-full bg-sky-500 text-white">Login</button>
      
      </form>
    </div>
  )
}

export default Login
