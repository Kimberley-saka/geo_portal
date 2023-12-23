

function SignUp() {
  return (
    <div className=" flex justify-center w-full pt-14">
      <form className="flex flex-col space-y-5">
        <input className=" outline-none px-8 w-72 h-8 rounded-full shadow-sm shadow-sky-300" type="text" 
        placeholder="First Name"></input>
        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300" type="text"
        placeholder="Last Name"></input>
        <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300" type="email"
        placeholder="Email"></input>
         <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300" type="password"
        placeholder="Password"></input>
         <input className="outline-none w-72 h-8 px-8 rounded-full shadow-sm shadow-sky-300" type="password"
        placeholder="Confirm Password"></input>

        <button className="w-72 h-8 rounded-full bg-sky-500 text-white" type="submit">
          Sign Up</button>

    
      </form>
    </div>
  )
}

export default SignUp
