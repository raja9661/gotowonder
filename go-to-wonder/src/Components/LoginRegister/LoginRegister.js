import React, { useState } from 'react'
import './LoginRegister.css';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { auth } from '../../Firebase/FirebaseSetUp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase/FirebaseSetUp';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import myContext from '../Context/Data/myContext';
import { useContext } from 'react';
import earth from './earth2.png'

function LoginRegister() {
    const [singnUp,setSignUp] = useState(false);
    const [lg,setLg] =  useState(false);
    const context = useContext(myContext);
    const { setLogin } = context;
    const [action,setAction] = useState('');
    const navto = useNavigate();
    const [formData,setFormData] = useState({
        username:"",email:"",password:"",cfpassword:""
    })

    function changeHandler(event)
    {
        const {name,value} = event.target;
        setFormData((oldData)=>{
            return{
                ...oldData,
                [name]:value
            }
        })
    }
    async function submitHandler(e)
    {
        e.preventDefault();
        if(formData.username ==="" || formData.email === "" ||
        formData.password==="" || formData.cfpassword===""  )
        {
            toast.warn("all fields are mendetory");
        }
        try{
        if(formData.password === formData.cfpassword)
        {
            const users = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            toast("SignIn Successful please LogIn");
            setSignUp(true);
            const userData = {
                username:formData.username,
                email:users.user.email,
                password:formData.password,
                uid:users.user.uid
            }
            const userRef = collection(db,"users");
            await addDoc(userRef,userData);
            const storeData = await getDocs(userRef);
            console.log(storeData);
            formData.username="";
            formData.email="";
            formData.password="";
            formData.cfpassword="";
            
        }else{
            toast.warn("password not matched");
        }
        }catch(error)
        {
            toast.warn(error.message)
        }
        
    }
    async function loginHandler(e)
    {
        e.preventDefault();
        if(formData.email==="" || formData.password==="")
        {
            toast.warn("all fields are mendetory");
        }
        try{
            await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            )
            toast("login successfully");
            setLogin(true);
            setLg(true);
            formData.email="";
            formData.password="";
            formData.cfpassword="";
            formData.username="";
        }
        catch(error)
        {
            toast.warn("Invailed user");
        }
        
    }
    function rotateEarth()
    {
        navto("/welcome");
    }
        const registerLink = () => {
            setAction('active');
        }
        const loginLink = () => {
            setAction('');
        }
  return (
    <div className='main-box'>
        <div className= {`box-body ${action}`}>
        <div className='form-box login'>
            <form onSubmit={loginHandler}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='email'
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Email' required
                    />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password'
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Password' required
                    />
                    <FaLock className='icon'/>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account?
                    <NavLink onClick={registerLink}>Register</NavLink></p>
                    {
                        lg && <img onClick={rotateEarth} src={earth} id='earth' alt='earthImg'   />
                    }
                </div>
            </form>
        </div>
        <div className='form-box register'>
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <div className='input-box'>
                    <input type='text'
                    name='username'
                    onChange={changeHandler}
                    value={formData.username}
                    placeholder='Username' required
                    />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='email'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email} 
                    placeholder='Email' required
                    />
                    <MdEmail className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password'
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder='Enter 6 Digit Password' required
                    />
                    <FaLock className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' 
                    name='cfpassword'
                    onChange={changeHandler}
                    value={formData.cfpassword}
                    placeholder='Confirm Password' required
                    />
                    <FaLock className='icon'/>
                </div>
                <button type='submit'>Register</button>
                <div className='register-link'>
                    <p>Already have an account?
                    <NavLink onClick={loginLink}>Login</NavLink></p>
                    {/* {
                        singnUp && <img src={earth} id='earth' alt='earthImg'   />
                    } */}
                </div>
            </form>
            </div>
    </div>
    </div>
  )
}

export default LoginRegister
