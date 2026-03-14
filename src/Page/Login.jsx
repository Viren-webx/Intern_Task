import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { validateLogin } from "../utils/validation";

export default function Login() {

  const { login } = useAuth();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateLogin(email,password);

    if(validation){
      setError(validation);
      return;
    }

    const success = login(email,password);

    if(!success){
      setError("Invalid email or password");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-[url('/geometric-gradient-futuristic-background_23-2149116406.avif')] bg-cover bg-center bg-no-repeat px-4">
      <div className="bg-blue-500/20 backdrop-blur-md shadow-2xl rounded-2xl p-8 md:p-10 w-full max-w-md transition-all duration-300 hover:scale-[1.02]">

        <h2 className="text-3xl font-serif text-center mb-6 text-white ">
          Field Manager Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm font-medium shadow-inner">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-500 text-white bg-transparent rounded-lg p-3 pl-4 focus:ring-1  focus:ring-blue-400 focus:border-blue-400 outline-none transition-shadow shadow-sm hover:shadow-md"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-500 text-white bg-transparent rounded-lg p-3 pl-4 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-shadow shadow-sm hover:shadow-md"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="w-full bg-gray-400  hover:bg-blue-500 hover:text-white transition-all text-gray-500 text-xl py-3 rounded-lg font-bold shadow-md hover:shadow-lg">
            Do't chlick Login
          </button>

        </form>

        <p className="text-[10] text-gray-200 text-center mt-5">
          Demo: test@test.com / 123456
        </p>

      </div>

    </div>
  );

}
