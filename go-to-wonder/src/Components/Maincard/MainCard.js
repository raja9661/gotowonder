import React from 'react'
import './MainCard.css';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/Data/myContext';
import { useContext } from 'react';

function MainCard() {
    const navto = useNavigate();
    const context = useContext(myContext);
    const { setCategory} = context;
    const { login } = context;
    function clickHandler(ctgry){
        if(login === true)
            {
                setCategory(ctgry);
                navto("/destination");
            }
            else{
                navto('/signIn')
            }
    }
  return (
    <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src="https://cdn-imgix.headout.com/media/images/d44b6b387bab5e7e6517648382962a6c-20881-hurghada-from-hurghada---full-day-trip-to-cairo-by-plane-01.jpg?fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min" alt="History"/>
                </div>
                    <div className="content">
                        <h2 id='one'>HISTORICAL PLACE</h2>
                        <p>Without History, future can be blank</p>
                        <a onClick={()=>clickHandler("history")} id='first'>Read More</a>
                    </div>
            </div>
            <div className="card" >
                <div className="imgBx">
                    <img src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/06/shutterstock_527296741-South-AFrica-shark.jpg?resize=1024%2C650&ssl=1" alt="advanture"/>
                </div>
                    <div className="content">
                        <h2 id='two'>ADVENTURES PLACE</h2>
                        <p>Lit your Potential to roam Adventurous Place</p>
                        <a onClick={()=>clickHandler("advanture")} id='second'>Read More</a>
                    </div>
            </div>
            <div className="card" >
                <div className="imgBx">
                    <img src="https://ak-d.tripcdn.com/images/100e1d000001epvhu7D2A_Z_640_10000_R5.jpg_.webp?proc=autoorient&proc=source%2ftrip" alt="advanture"/>
                </div>
                    <div className="content">
                        <h2 id='three'>HOLY PLACE</h2>
                        <p>There is an eye , need to see the divine power of God</p>
                        <a onClick={()=>clickHandler("holy")} id='third'>Read More</a>
                    </div>
            </div>
        </div>
  )
}

export default MainCard
