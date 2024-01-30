import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  /* For forms, instead of using useState, we'll use useRef
  This will store the value and prevent the re-rendering of the component */

  /* form is a built in tag in html which has the default behaviour of onSubmit function
  To prevent this behaviour and use our own method, we need to write e.preventDefault() method *******  */

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();
  /* const [email, setEmail] = useState('');
   const [password, setPassword] = useState(''); */

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  const handleButtonClick = () => {
    // Validate the form data

    /* console.log(email.current.value);
   console.log(password.current.value); 
   console.log(fullName.current.value);

    this is an object and by accessing the properties of this object we can get its value.
    {current: input.p-4.my-2.w-full.bg-gray-700}
    current: input.p-4.my-2.w-full.bg-gray-700
    ***** This is the reference to that value - which is an object *********
     So we'll validate password.current.value and not just password */

    const message = checkValidData(
      //  fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignedIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              //we'll not be taking it from user as user does not have the updated information .
              // So we'll take it from the auth which is a function
              // After getting the information, we'll dispatch the action to add user
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="logo"
          className="w-screen h-screen"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 w-full ">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignedIn ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
