import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  // signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase"

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUps = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUps = () => {
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="flex flex-col gap-6 mx-auto text-center w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold">Sign Up</h2>

          <button
            onClick={handleGoogleSignUps}
            className="w-full flex items-center justify-center gap-3 
             bg-white border border-slate-300 
             text-slate-700 font-medium 
             py-3 rounded-xl 
             hover:bg-slate-50 
             transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <span className="w-full text-md border-b border-1 border-[#eee]"></span>
          <form
            action=""
            className="form flex flex-col gap-3"
            onSubmit={handleSignUps}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="py-2 px-4 border rounded-md text-md"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Password here"
              className="py-2 px-4 border rounded-md text-md"
            />
            <button className="py-2 px-4 rounded-md text-md bg-emerald-600 text-white cursor-pointer">
              Sign in
            </button>

            <button
              onClick={handleLogin}
              className="border border-slate-300 text-slate-700 px-4 py-2 rounded-md cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
