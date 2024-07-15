import React from 'react'
import Layout from '../../Components/Layout/Layout';
import './Welcome.css';
// import { NavLink } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import data from '../../DataBase/Data';
import feedImg from './feedBack.jpg';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";
import avtar1 from './avtar1.png';
import avtar2 from './avtar2.png';
import avtar3 from './avtar3.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Welcome() {
    const id=1;
    const navto = useNavigate();
    function CheckOut(title,image,cost,dis){
        navto("/payment",{state :{title:title,image:image,cost:cost,dis:dis}});
    }
    function feedBack(event){
        event.preventDefault();
        toast("Thankyou for your FeedBack");
    }
  return (
    <Layout>
      <div className='welcome-sec'>
      <Slider/>
       {/* destination section start */}
        <div className="destination" id="destinations">
        <div className="center-text">
            <h1 className="heading">
            <span>T</span>
            <span>r</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
        </h1>
        </div>
        <div className="destination-content">
            {
                data.filter((d)=> d.tranding === "top").map(
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
    </div>
            {/* gallery section start */}

    <div className="gallery" id="gallery">
        <h1 className="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
        </h1>
        <div className="box-container">
            {
                data.filter((d)=> d.imgFor === "gallery").map
                ((d,index)=>{
                    return(
                        <div className="gallery-box" key={index}>
                        <img src={d.image} alt=""/>
                        <div className="content">
                        <h3>{d.title}</h3>
                        <p>{d.dis.slice(0,100)}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
       {/* gallery section end */}
       
       {/* review section start */}

    <div className="review" id="review">
        <h1 className="heading">
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
        </h1>
        <div className="swiper-container review-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="review-box">
                        <img src={avtar2} alt=""/>
                        <h3>Mohit Das</h3>
                        <p>AdventureSmith’s Machu Picchu Explorer itinerary allows a traveler to visit the major Inca sites and locales in a comfortable.
                            I embarked on an expanded version of the itinerary in July. </p>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <IoIosStarHalf />
                            <CiStar />
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="review-box">
                        <img src={avtar3} alt=""/>
                        <h3>Mr Han</h3>
                        <p>A magnificent splendor. You will need more than one visit and  
                            Be prepared to walk a lot and different season will give you a different feel and view of what life might have been in this grand palace</p>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <IoIosStarHalf />
                            <CiStar />
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="review-box">
                        <img src={avtar1} alt=""/>
                        <h3>Sana</h3>
                        <p>This place is off the hook!! It truly is a wonder of the world. You can climb the big pyramid. 
                             and I felt very comfortable supporting them. It was a great experience that I will remember forever.</p>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <IoIosStarHalf />
                            <CiStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* review section end */}

        {/* contact section start */}

    <div className="contact" id="contact">
        <h1 className="heading">
            <span>f</span>
            <span>e</span>
            <span>e</span>
            <span>d</span>
            <span>b</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
        </h1>
         <div className="row">
             <div className="row-image">
                 <img src={feedImg} alt=""/>
             </div>
             <form onSubmit={feedBack}>
                 <div className="feedback-box">
                     <input type="text" placeholder="name" className='form-input'/>
                     <input type="email" placeholder="email" className='form-input'/>
                 </div>
                 <div className="feedback-box">
                    <input type="number" placeholder="number" className='form-input'/>
                    <input type="text" placeholder="subject" className='form-input'/>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                <input type="submit" className="feedback-btn" value="send message"/>
             </form>
         </div>
    </div>
       {/* contact section end */}

      </div>
    </Layout>
  )
}

export default Welcome




