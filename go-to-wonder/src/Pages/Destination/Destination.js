import './Destination.css';
import React from 'react'
import myContext from '../../Components/Context/Data/myContext';
import { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import data from '../../DataBase/Data';
import { useNavigate } from 'react-router-dom';


function Destination() {
    const navto = useNavigate();
    const context = useContext(myContext);
    const { setCategory,category } = context;
    function CheckOut(title,image,cost,dis){
        navto("/payment",{state :{title:title,image:image,cost:cost,dis:dis}});
    }
  return (
    <Layout>
        <div className='destination-main'>
            {/* <h1 class="cat-heading">
              <span>{category}</span>
              </h1> */}
            {
                (function(){
                    if(category === "holy"){
                        return  <div className="destination-content">
                        {
                            data.filter((d)=> d.typ === "holy").map(
                                (d,index)=>{
                                    return(
                                        <div className="destination-box" key={index}>
                                        <img src={d.image} alt=""/>
                                        <h4>{d.title}</h4>
                                        <h6>{d.location}</h6>
                                        <div className="row">
                                        <p><b>${d.cost}</b>/person</p>
                                        <a onClick={()=> CheckOut(d.title,d.image,d.cost,d.dis)} className="button">Book Now</a>
                            </div>
                        </div>
                                    )
                                }
                            )
                        }
                         {/* destination section end */}
                    </div>
                    }
                    else if(category === "history"){
                        return  <div className="destination-content">
                        {
                            data.filter((d)=> d.typ === "history").map(
                                (d,index)=>{
                                    return(
                                        <div className="destination-box" key={index}>
                                        <img src={d.image} alt=""/>
                                        <h4>{d.title}</h4>
                                        <h6>{d.location}</h6>
                                        <div className="row">
                                        <p><b>${d.cost}</b>/person</p>
                                        <a onClick={()=> CheckOut(d.title,d.image,d.cost,d.dis)} className="button">Book Now</a>
                            </div>
                        </div>
                                    )
                                }
                            )
                        }
                         {/* destination section end */}
                    </div>
                    }
                    else if(category === "advanture"){
                        return  <div className="destination-content">
                        {
                            data.filter((d)=> d.typ === "advanture").map(
                                (d,index)=>{
                                    return(
                                        <div className="destination-box" key={index}>
                                        <img src={d.image} alt=""/>
                                        <h4>{d.title}</h4>
                                        <h6>{d.location}</h6>
                                        <div className="row">
                                        <p><b>${d.cost}</b>/person</p>
                                        <a onClick={()=> CheckOut(d.title,d.image,d.cost,d.dis)} className="button">Book Now</a>
                            </div>
                        </div>
                                    )
                                }
                            )
                        }
                         {/* destination section end */}
                    </div>
                    }
                    else{
                        return  <div className="destination-content">
                        {
                            data.map(
                                (d,index)=>{
                                    return(
                                        <div className="destination-box" key={index}>
                                        <img src={d.image} alt=""/>
                                        <h4>{d.title}</h4>
                                        <h6>{d.location}</h6>
                                        <div className="row">
                                        <p><b>${d.cost}</b>/person</p>
                                        <a onClick={()=> CheckOut(d.title,d.image,d.cost,d.dis)} className="button">Book Now</a>
                            </div>
                        </div>
                                    )
                                }
                            )
                        }
                         {/* destination section end */}
                    </div>
                    }
                })() 
            }
        </div>
    </Layout>
  )
}

export default Destination
