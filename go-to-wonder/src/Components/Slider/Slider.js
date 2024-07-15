import React, { useEffect } from 'react'
import './Slider.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";



function Slider() {
function loader(){
        let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}
    }
    useEffect(()=>{
        loader();
    },[]);
  return (
    <div className="slider">


    <div className="list">

        <div className="item">
            <img src="https://cdn-imgix.headout.com/media/images/5b6b5c4b44633621ad74cc44800b836c-great%20wall%20of%20china.jpg?fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min" alt=""/>

            <div className="content">
                <div className="title">The Great Wall</div>
                <div className="type">China</div>
                <div className="description">
                {/* <span>The Great Wall of China spans over 13,000 miles and dates back to the 7th century BC</span> */}
                </div>
                {/* <div className="button">
                    <button>SEE MORE</button>
                </div> */}
            </div>
        </div>

        <div className="item">
            <img src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/06/shutterstock_310921298-Ben-Lomond-Queenstown-Hill.jpg?resize=1024%2C683&ssl=1" alt=""/>

            <div className="content">
                <div className="title">Queenstown</div>
                <div className="type">New Zealand</div>
                <div className="description">
                {/* <span>The extreme sports capital of the world seems like an obvious place to start the list of adventure destinations.</span> */}
                </div>
                {/* <div className="button">
                    <button>SEE MORE</button>
                </div> */}
            </div>
        </div>

        <div className="item">
            <img src="https://cdn-imgix.headout.com/media/images/bf7644e548a12ca8d92d1f56b96b20eb-Colosseum%201.jpg?fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min" alt=""/>

            <div className="content">
                <div className="title">The Colosseum</div>
                <div className="type">Rome, Italy</div>
                <div className="description">
                {/* <span>The Colosseum is an iconic amphitheater that dates back to AD 80 and is considered one of the greatest engineering feats of the Roman Empire.</span> */}
                </div>
                {/* <div className="button">
                    <button>SEE MORE</button>
                </div> */}
            </div>
        </div>

        <div className="item">
            <img src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/06/shutterstock_527296741-South-AFrica-shark.jpg?resize=1024%2C650&ssl=1" alt=""/>

            <div className="content">
                <div className="title">Cape Town</div>
                <div className="type">South Africa</div>
                <div className="description">
                {/* <span>Adventures on land, in the sea and in the air await you in Cape Town, South Africa.</span> */}
                </div>
                {/* <div className="button">
                    <button>SEE MORE</button>
                </div> */}
            </div>
        </div>

    </div>


    <div className="thumbnail">

        <div className="item">
            <img src="https://cdn-imgix.headout.com/media/images/5b6b5c4b44633621ad74cc44800b836c-great%20wall%20of%20china.jpg?fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min" alt="first"/>
        </div>
        <div className="item">
            <img src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/06/shutterstock_310921298-Ben-Lomond-Queenstown-Hill.jpg?resize=1024%2C683&ssl=1" alt="second"/>
        </div>
        <div className="item">
            <img src="https://cdn-imgix.headout.com/media/images/bf7644e548a12ca8d92d1f56b96b20eb-Colosseum%201.jpg?fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min" alt="third"/>
        </div>
        <div className="item">
            <img src="https://i0.wp.com/blog.bambatravel.com/wp-content/uploads/2018/06/shutterstock_527296741-South-AFrica-shark.jpg?resize=1024%2C650&ssl=1" alt="fourth"/>
        </div>

    </div>


    <div className="nextPrevArrows">
        <button className="prev"><IoIosArrowBack /></button>
        <button className="next"><IoIosArrowForward /></button>
    </div>


</div>

  )
}

export default Slider
