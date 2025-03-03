import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const [state, setState] = useState("");
  
  const navigateBack = () => navigate('/');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          username, email: user.email, firstName: fname, lastName: lname, language, state
        });
      }
      alert("User Registered Successfully!!");
      navigate('/news');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-xl">
        <h3 className="text-3xl font-bold text-center mb-6 text-blue-400">Sign Up</h3>
        <form onSubmit={handleRegister} className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} required />
            <label className="block text-sm font-medium mt-4 mb-2">First Name</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter first name" onChange={(e) => setFname(e.target.value)} required />
            <label className="block text-sm font-medium mt-4 mb-2">Last Name</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter last name" onChange={(e) => setLname(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} required />
            <label className="block text-sm font-medium mt-4 mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />
            <label className="block text-sm font-medium mt-4 mb-2">Preferred Language</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter language" onChange={(e) => setLanguage(e.target.value)} required />
            <label className="block text-sm font-medium mt-4 mb-2">State</label>
            <input type="text" className="w-full p-2 border rounded-md bg-gray-700 border-gray-600 focus:ring-blue-500" placeholder="Enter state" onChange={(e) => setState(e.target.value)} required />
          </div>
          <div className="col-span-2 flex flex-col gap-4 mt-6">
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition">Sign Up</button>
            <button type="button" className="w-full py-3 bg-gray-600 hover:bg-gray-700 rounded-md font-semibold transition" onClick={navigateBack}>Back</button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Already registered? <a href="/signin" className="text-blue-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
