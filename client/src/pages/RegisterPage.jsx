import { Link } from "react-router-dom";

export default function RegisterPage(){
  return(
    <div className="flex items-center justify-center mt-10">
      <div className="w-full max-w-sm">
        <Link to={"/"} className="block text-primary text-2xl font-bold mb-4 pl-4" for="username">
          airbnb
        </Link>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-4" for="username">
            Create your account
          </label>
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Full name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John Doe" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="your@email.com" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-gray-500 text-xs italic">Use at least 8 characters, one uppercase, one lowercase and one number.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="w-full bg-[#E0565B] hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create account
          </button>
        </div>
        </form>
        <div className="flex gap-2 text-gray-500 text-xs pl-4">
        <p>Already a member?</p>
        <Link to={"/login"} className="text-primary">Signin</Link>
        </div>
        
      </div>
    </div>
  )
}