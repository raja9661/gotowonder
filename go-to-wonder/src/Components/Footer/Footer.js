import React from 'react'
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <div>
      <footer>
        <div className='all-items'>
          <div className='item-list'>
            <p className='item-title'>GoToWonder</p>
            <ul>
              <p className='info'>GoToWonder is a Travelling Platform,
              It provide wonderful<br/> user Interface and
              easy to use. </p>
            </ul>
          </div>
          <div className='item-list'>
            <p className='item-title'>Navigate</p>
            <ul>
              <li className='item'>
                <NavLink className={'nlink'} to={'/'}>Home</NavLink>
              </li>
              <li className='item'>
                <NavLink className={'nlink'} to={'/'}>Service</NavLink>
              </li>
              <li className='item'>
                <NavLink className={'nlink'} to={'/'}>Contact</NavLink>
              </li>
              <li className='item'>
                <NavLink className={'nlink'} to={'/'}>Help</NavLink>
              </li>
            </ul>
          </div>
          <div className='item-list'>
            <p className='item-title'>Social</p>
            <ul className='social'>
              <li className='item icn'>
                <NavLink className={'nlink'} to={'/'}><FaGithub /></NavLink>
              </li>
              <li className='item icn'>
                <NavLink className={'nlink'} to={'/'}><FaLinkedin /></NavLink>
              </li>
              <li className='item icn'>
                <NavLink className={'nlink'} to={'/'}><FaSquareInstagram /></NavLink>
              </li>
              <li className='item icn'>
                <NavLink className={'nlink'} to={'/'}><FaFacebook /></NavLink>
              </li>
            </ul>
          </div>
          <div className='item-list'>
            <p className='item-title'>Contact</p>
            <ul>
              <li className='item'>
                <NavLink className={'nlink'} to={'mailto:navkaur3108@gmail.com'}>
                  <MdEmail />  navkaur3108@gmail.com</NavLink>
              </li>
              <li className='item'>
                <NavLink className={'nlink'} to={'tel:+91 9661629002'}>
                  <IoIosCall /> +91 9661629002</NavLink>
              </li>
              <li className='item'>
                <NavLink className={'nlink'} to={'/'}>
                <IoLocationSharp /> Samalkha Panipat,Haryana</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
