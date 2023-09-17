import React, { useState } from 'react'
import './Login.css'
import {auth } from './Firebase'; 
import {login} from './features/userSlice'
import { Photo } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from 'firebase/auth';


const Login = () => {
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [profilePic, setProfilepic ] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password) // Use signInWithEmailAndPassword function with auth instance
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((error) => alert(error.message)); // Access error message using error.message
      };
  
    const register = () => {
        if (!name) {
          return alert('Please enter a full name');
        }
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: name,
              photoURL: profilePic,
            }).then(() => {
              dispatch(
                login({
                  email: user.email,
                  uid: user.uid,
                  displayName: name,
                  photoUrl: profilePic,
                })
              );
            });
          })
          .catch((error) => alert(error));
      };


  return (
    <div className='login'>
        <img src="" alt="" />
   

        <form action="">
            <input 
            value = {name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder='Full name'
            type="text" />

            <input 
            value={profilePic}
            onChange = {(e)=>{setProfilepic(e.target.value)}}
           
            placeholder='Profile Pic URL'
            type="text" />

            <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder='Email' 
            type="email" />

            <input
            placeholder='Password' 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password" />      

            <button type='submit' onClick={loginToApp}>
                Sign In
            </button>


        </form> 
        <p> Not a member? {"  "}
            <span className='login__register' onClick={register}> 
                
                Register Now
            </span>
            
            </p>
    </div>
  )
}

export default Login