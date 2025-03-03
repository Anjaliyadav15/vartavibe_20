import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.error("No user is logged in");
        return;
      }
      try {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          setFormData(docSnap.data());
        } else {
          console.error("User document does not exist in Firestore");
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/signin";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  async function handleSave() {
    if (!auth.currentUser) return;
    try {
      const docRef = doc(db, "Users", auth.currentUser.uid);
      await updateDoc(docRef, formData);
      setUserDetails(formData);
      setEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700">
      {userDetails ? (
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.b6TlmDhbYnUSrWS_SiPJ0wHaJK&pid=Api&P=0&h=220"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>
          <h3 className="text-3xl font-bold text-gray-800">
            Welcome, {userDetails.firstName} 🙏
          </h3>
          <div className="mt-4 text-gray-600 text-lg">
            {editing ? (
              <>
                <input
                  className="border p-2 w-full bg-transparent text-black mb-2"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  className="border p-2 w-full bg-transparent text-black mb-2"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <input
                  className="border p-2 w-full bg-transparent text-black mb-2"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="Language"
                />
                <input
                  className="border p-2 w-full bg-transparent text-black mb-2"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </>
            ) : (
              <>
                <p><span className="font-semibold">Email:</span> {userDetails.email}</p>
                <p><span className="font-semibold">First Name:</span> {userDetails.firstName}</p>
                <p><span className="font-semibold">Last Name:</span> {userDetails.lastName}</p>
                <p><span className="font-semibold">Language:</span> {userDetails.language}</p>
                <p><span className="font-semibold">State:</span> {userDetails.state}</p>
              </>
            )}
          </div>
          {editing ? (
            <button
              className="mt-4 bg-green-500 text-white py-2 px-4 shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          )}
          <button
            className="mt-4 bg-red-500 text-white py-2 px-4 shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="mt-4 bg-gray-500 text-white py-2 px-4 shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
            onClick={() => navigate('/News')}
          >
            Back
          </button>
        </div>
      ) : (
        <p className="text-white text-2xl font-semibold">Loading...</p>
      )}
    </div>
  );
}

export default Profile;
