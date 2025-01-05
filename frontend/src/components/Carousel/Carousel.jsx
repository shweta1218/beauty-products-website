import React, { useState, useEffect, useRef } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './Carousel.css'; 

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // add a state to control auto slide
  const intervalId = useRef(null); // add a ref to store the interval id

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  useEffect(() => {
    if (autoSlide) {
      intervalId.current = setInterval(nextSlide, 3000); // call nextSlide every 3 seconds
    }
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }
  }, [autoSlide, nextSlide]);

  const handleMouseEnter = () => {
    setAutoSlide(false); // pause auto slide on mouse enter
  }

  const handleMouseLeave = () => {
    setAutoSlide(true); // resume auto slide on mouse leave
  }

  return (
    <div
      className='carousel'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
      {data.map((item, idx) => {
        return <img src={item.src} alt="" key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
      })}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {data.map((_, idx) => {
          return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel;