import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
// import { ShootingStars } from '../components/ui/shooting-stars.jsx';
// import { StarsBackground } from '../components/ui/stars-background.jsx';
function SignInwithGoogle() {
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        // Split displayName into first and last name
        const fullName = user.displayName ? user.displayName.split(" ") : ["", ""];
        const firstName = fullName[0] || "";
        const lastName = fullName.length > 1 ? fullName.slice(1).join(" ") : "";

        // Store user details in Firestore
        await setDoc(doc(db, "Users", user.uid), {
          username: user.email.split("@")[0], // Set username as email prefix
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          password: "", // Google sign-in does not provide passwords
          language: "English", // Default language, update if needed
          state: "", // Set a default or fetch from another source
        });

        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/News";
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Google Sign-In Failed!", { position: "top-center" });
    }
  }

  return (
    <div className="relative text-center mt-6 z-10">
      {/* Background elements */}
      {/* <StarsBackground />
      <ShootingStars /> */}
      
      {/* Main form */}
      <div className="relative z-20"> {/* Ensure form is above background */}
        <p className="text-gray-400 mb-4">-- Or continue with --</p>
        <button
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold flex justify-center items-center transition"
          onClick={googleLogin}
        >
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.EhTMbGiYfYzQnWLgjZaoJAHaHa&pid=Api&P=0&h=220"
            alt="Google"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignInwithGoogle;