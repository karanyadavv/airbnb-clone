import { Link } from "react-router-dom";

export default function LoginPage(){
  return(
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-xs">
        <Link to={"/"} className="block text-primary text-2xl font-bold mb-4 pl-4">
          airbnb
        </Link>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-4">
          Sign in to your account
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            E-mail
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your@email.com" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-gray-500 text-xs italic">Use at least 8 characters, one uppercase, one lowercase and one number.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-[#E0565B] hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800" href="#">
            Forgot Password?
          </a>
        </div>
        </form>
        <div className="flex gap-2 text-gray-500 text-xs pl-4">
        <p>Don't have an account?</p>
        <Link to={"/register"} className="text-primary">Signup</Link>
        </div>
        
      </div>
    </div>
  );
}