import React, { useEffect } from 'react'
import './Parallax.css';
import b1  from './img/bird1.png'
import b2 from './img/bird2.png'
import f from './img/forest.png'
import newR from './img/newRoad.png'
import MainCard from '../Maincard/MainCard';
import bus from './img/bus.jpeg'
import { NavLink } from 'react-router-dom';
import newCar from './img/finalCar1.png'
import popimg from './img/popImg.png'


function Parallax() {

    
        function changeHandler(){
            let pop = document.getElementById("text-2");
            // console.log(pop);
            pop.classList.add('open-msg');
        }    
        
        function show(){
            let one = document.getElementById("d");
            one.classList.add('sh');
        }
        function closebtn()
        {
            let pop = document.getElementById("text-2");
            pop.classList.remove('open-msg');
            let cbtn =  document.getElementById('d');
            cbtn.classList.remove('sh');
        }

    function loader()
    {
        let text = document.getElementById('text');
            let bird1 = document.getElementById('bird1');
            let bird2 = document.getElementById('bird2');
            let btn = document.getElementById('btn');
            let rocks = document.getElementById('rocks');
            let water = document.getElementById('water');
            let header = document.getElementById('header');
            let forest = document.getElementById('forest');
            window.addEventListener('scroll',function(){
                let value = window.scrollY;
                text.style.top =  50+ value *-0.5 + '%';
                bird1.style.top = value *-1.5 + 'px';
                bird1.style.left = value * 2 + 'px';
                bird2.style.top = value *-1.5 + 'px';
                bird2.style.left = value *-5 + 'px';
                btn.style.marginTop = value * 1.5 + 'px';
                rocks.style.top = value *-0.12 + 'px';
                forest.style.top = value * 0.25 + 'px';
                header.style.top = value * 0.5 + 'px';
                water.style.left = value*0.5+'px';
            })
    }
    useEffect(()=>{
        loader();
    })
    
  return (
    <div className="wrapper">
    <header id="header">
        {/* <div className="logo-container">
            <a href="/" className="logo"><img  src={logo} alt="logo" /></a>
        </div>
        <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">SignIn</a></li>
        </ul> */}
    </header>
    <section>
    <h2 id="text"><span>It's time for a new</span><br/>Adventure</h2>
        <img src={b1} alt="bird1" id="bird1"/>
        <img src={b2} alt="bird2" id="bird2"/>
        <img src={f} alt="forest" id="forest"/>
        <button id="btn" onClick={show}>Go To Wonder</button>
        {/* <a href="/" id="btn">Go To Wonder</a> */}
        <img src={newR} alt="rocks" id="rocks"/>
        <img src={newCar} alt="water" id="water"/>
    </section>
    <div id="d" className="popup">
    <img id="grass" src={popimg} alt="popup"/>
    <div id="close" className="close-btn" onClick={closebtn}>&times;</div>
            <div className="image">
                <img src={bus} alt="bus"/>
            </div>
                <blockquote id="text-2" className="oval-thought">
                    <p>How may I help you?<br/>Do yoy want to see the<NavLink to={'/signIn'} id='fs'><strong>Beauty of World</strong></NavLink></p>
                </blockquote>
                <button id="b2" onClick={changeHandler}>Click me</button>
        </div>
    <div className="sec">
    <MainCard/>
    </div>
</div>
 
  )
}

export default Parallax
