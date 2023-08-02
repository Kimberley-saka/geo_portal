export default function Authentication() {
  return(
   <div className="flex justify-center items-center">
    
    <div className="flex flex-col items-center h-2/4 w-2/4 bg-slate-500 shadow-2xl shadow-black">

      <div>
        <p>Login to your acccount</p>
      </div>

      <div className="flex flex-col">
        <form className="flex flex-col">
          <label>E-mail</label>
          <input type="text" />

          <label>Password</label>
          <input type="text" />

          <div> 
            <button>Register</button>
            <button>Login</button>
          </div>
         
        </form>
        
        <a href="">Forgot password</a>
      </div>

    </div>


   </div>
  )
}