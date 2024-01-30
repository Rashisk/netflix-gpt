import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";
// rafce full form - React Arrow Function Component Export

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleGptSearchClick = () =>{
    
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // After getting the information, we'll dispatch the action to add user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        // Dispatch an action to remove user
        dispatch(removeUser());
        // ...
      }
    });
  }, []);
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          <button className="w-14 h-14 mx-3 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
          <div className="flex-column">
            <img
              className="w-14 h-14 mx-3 my-1"
              src={USER_AVATAR}
              alt="usericon"
            />
            <p className="text-center font-bold">{user?.displayName}</p>
          </div>
          <button
            onClick={handleSignOut}
            type="button"
            className="font-bold text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
