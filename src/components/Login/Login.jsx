import {FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
      <div>
        <div className="min-h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")' }}>
          <div className="flex justify-end">
            <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
              <div>
                <form>
                  <div>
                    <span className="text-sm text-gray-900">Welcome back</span>
                    <h1 className="text-2xl font-bold">Login to your account</h1>
                  </div>
{/* email */}
                  <div className="my-3">
                    <label className="block text-md mb-2" htmlFor="email">Email</label>
                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Email" />
                  </div>
{/* password */}
                  <div className="mt-5">
                    <label className="block text-md mb-2" htmlFor="password">Password</label>
                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Password" />
                  </div>

                  <div className="flex justify-between mt-2">
                    <div>
                      <input className="cursor-pointer mr-2" type="radio" name="rememberme" />
                      <span className="text-sm">Remember Me</span>
                    </div>
                    <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
                  </div>
                  <div>
                    <button className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
                    <div className="flex space-x-2 justify-center items-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                      <FcGoogle></FcGoogle>
                      <button>Or sign-in with Google</button>
                    </div>
                  </div>
                </form>
                <p className="mt-8">Don't have an account? <Link to='/register' className="cursor-pointer text-sm text-blue-600 hover:underline hover:text-red-600">Register Here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  