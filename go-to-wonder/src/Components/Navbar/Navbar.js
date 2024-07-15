import React, { useContext } from 'react';
import './Navbar.css';
import logo from './logo.png'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import myContext from '../Context/Data/myContext';
import { auth } from '../../Firebase/FirebaseSetUp';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Navbar() {
  const usenav = useNavigate();
  const context = useContext(myContext);
  const { login } = context;
  const { setLogin } = context;
  const { setCategory } = context;
   function showSider()
  {
    let sider = document.getElementById('sbr');
    sider.style.display = 'flex';
    // sider.classList.add('show-side');
  }
  function closeSider()
  {
    let sider = document.getElementById('sbr');
    sider.style.display = 'none'
    // sider.classList.remove('show-side');
  }
  async  function logOutHandler()
    {
        try{
            await signOut(auth);
            toast("logout successfully")
            usenav('/')
            setLogin(false);
        }catch(error)
        {
            toast(error.message)
        }
    }
    function catHandler(){
      setCategory("all")
    }
  return (
    <div className='wrapper'>
      <nav id='navbar'>
      <ul className='slidebar' id='sbr'>
          <li onClick={closeSider}><NavLink ><RxCross2 /></NavLink></li>
            <li><NavLink to={'/'} >Home</NavLink></li>
          {
            !login && <li><NavLink to={'/signIn'} >LogIn</NavLink></li>
          }
          {
            login && <li onClick={catHandler}><NavLink to={'/destination'} >Destination</NavLink></li>
          }
          {
            login && <li><NavLink to={'/welcome'} >Welcome</NavLink></li>
          }
          {
            login && <li onClick={logOutHandler}><NavLink to={'/'} >LogOut</NavLink></li>
          }
        </ul>
        <ul>
        <li><NavLink to={'/'} ><img  src={logo} alt="logo" id='logo'/></NavLink></li>
          
          <li className='hideOnMobile'><NavLink to={'/'} className={'active'}>Home</NavLink></li>
          {
            !login && <li className='hideOnMobile'><NavLink to={'/signIn'} >LogIn</NavLink></li>
          }
          {
            login && <li onClick={catHandler} className='hideOnMobile'><NavLink to={'/destination'} >Destination</NavLink></li>
          }
          {
            login && <li className='hideOnMobile'><NavLink to={'/welcome'} >Welcome</NavLink></li>
          }
          {
            login && <li onClick={logOutHandler} className='hideOnMobile'><NavLink to={'/'} >LogOut</NavLink></li>
          }
          <li className='menu-btn' onClick={showSider}><NavLink ><FaBars /></NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
