import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { toast } from "react-toastify";
import SignInwithGoogle from "../signInWithGoogle.jsx";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const maskedPassword = "✱".repeat(password.length);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/News";
      alert("User logged in Successfully");
    } catch (error) {
      console.log(error.message);
      alert("please enter correct email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email address</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-bold transition"
            >
              Submit
            </button>
          </div>
        </form>
        
        <p className="text-center text-sm text-gray-400 mt-4">
          New user? <a href="/signup" className="text-blue-400 hover:underline">Register Here</a>
        </p>

        <div className="mt-6">
          <SignInwithGoogle />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
