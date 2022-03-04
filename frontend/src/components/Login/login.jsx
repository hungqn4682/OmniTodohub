import React, {  } from "react";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("user", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });

    }
  };
  
  return (
    <div>
      <div>
        <input type="text" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter your Password" />
        <button className="button">3D BUTTON</button>
      </div>
      <div>
        <div className="social-share">
          <button
            className="social-share-item facebook"
            onClick={() => handleLogin(fbProvider)}
          >
            <i className="fab fa-facebook social-share-icon"></i>
            <span className="social-share-text">
              Share this post on Facebook
            </span>
          </button>
          <button
            className="social-share-item instagram"
            onClick={() => handleLogin(googleProvider)}
          >
            <i className="fab fa-instagram social-share-icon"></i>
            <span className="social-share-text">Share this post on Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
