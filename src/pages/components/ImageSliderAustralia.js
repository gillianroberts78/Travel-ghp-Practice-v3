import React, {useState} from 'react'
import { SliderDataAustralia } from './SliderDataAustralia';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa' 
import './ImageSlider.css';

const ImageSliderAustralia = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1);
  };


  console.log(current);

if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}

  return (
    <>
    <section className='slider'>

      <FaArrowAltCircleLeft className='left-arrow' onClick={nextSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={prevSlide}/>
     {SliderDataAustralia.map((slide, index)=> { 
        return (
          <div className={index === current ? 'slide active' : 'slide'} key=
          {index}>
        {index === current && (<img src={slide.image} alt= 'travel image' className='image' />)}
        </div>
        );
     })} 
    </section> 
    <div className='paragraph'>
<p >Hello </p>
<p>Thanks for visiting my site </p>
<p>Please read about my travels </p>
<p>In 2019 I visited Australia</p>
<p>I went to Sydney, then Melbourne </p>
<p>Lopsem Text </p>
<p>Lopsem Text </p>
</div>
</>
  ); 
}


export default ImageSliderAustralia