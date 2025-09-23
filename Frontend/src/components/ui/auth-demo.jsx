import React from 'react';
import { AuthUI } from './auth-fuse';

const AuthDemo = () => {
  const handleSignIn = (formData) => {
    console.log('Demo: Sign In', formData);
  };

  const handleSignUp = (formData) => {
    console.log('Demo: Sign Up', formData);
  };

  return (
    <div className="container-fluid p-0">
      <AuthUI 
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        loading={false}
        error={null}
        signInContent={{
          image: {
            src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Modern workspace for sign-in"
          },
          quote: {
            text: "Welcome Back! The journey continues.",
            author: "AIHub Team"
          }
        }}
        signUpContent={{
          image: {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            alt: "Creative workspace for new beginnings"
          },
          quote: {
            text: "Create an account. A new chapter awaits.",
            author: "AIHub Team"
          }
        }}
      />
    </div>
  );
};

export default AuthDemo;
