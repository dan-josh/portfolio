import React, { Component } from "react";
import Slider from "react-slick";
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript, TbFloatNone} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {BsFillBootstrapFill} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"

export default class TechSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows:false,
      pauseOnHover: true
    };
    return (
      <div className="text-light text-center">
        <h2 className="my-5">TECHNOLOGIES</h2>
        <div className="pt-5">
        <Slider {...settings}>
            <div>
                <AiFillHtml5  fontSize={"6rem"}/>
                <p className='mt-2'>HTML</p>
            </div>
            <div>
                <DiCss3 fontSize={"6rem"} />
                <p className='mt-2'>CSS</p>
            </div>
            <div>
                <TbBrandJavascript fontSize={"6rem"} />
                <p className='mt-2'>JAVASCRIPT</p>
            </div>
            <div>
                <FaReact fontSize={"6rem"} />
                <p className='mt-2'>REACT</p>
            </div>
            <div>
                <BsFillBootstrapFill fontSize={"6rem"} />
                <p className='mt-2'>BOOTSTRAP</p>
            </div>
            <div>
                <AiFillGithub fontSize={"6rem"} />
                <p className="mt-2">GITHUB</p>
            </div>
        </Slider>
        </div>
        
      </div>
    );
  }
}