import React from 'react'
import about from "../../images/about.jpg"
import {HiOutlineChatBubbleLeft} from "react-icons/hi2"

const AboutMe = () => {
  return (
    <div style={{backgroundColor:"#000"}} className="py-5 container-fluid m-auto ">
        <h2 className='text-light text-center pt-3 mb-5'>ABOUT ME</h2>
        <div className="container row m-auto align-items-center">
            <div className='col col-md-4 me-5 border p-3 mt-5'>
                <img className='image-fluid' style={{width:"100%",}} src={about} alt="" />
            </div>
            <div className='col col-md-6 pt-5 text-light ps-5'>
                <div className='d-flex pb-4'>
                    <HiOutlineChatBubbleLeft color='#fff' fontSize={"3rem"} />
                    <p className='ps-3 pt-2'>Hi There !!</p>
                </div>
                <div>
                    <p>
                        Welcome to my portfolio! I am a web developer with a passion for creating functional, user-friendly, and visually appealing websites.
                    </p>
                    <p>
                        My expertise includes proficiency in languages such as HTML, CSS, JavaScript, as well as React JS framework.
                        I have a strong attention to detail and a keen eye for design, which allows me to create websites that not only function seamlessly but also look great.
                    </p>
                    <p>
                        I believe in continuous learning and keeping up with the latest trends and technologies in web development.
                    </p>
                    <p>
                        When I am not coding, you can find me exploring new places as well as playing guitar.
                        Thank you for visiting my portfolio, and I look forward to the opportunity to work with you!
                    </p>

                    <button className='btn btn-outline-light me-3 mt-4'>CONTACT ME</button>
                    <button className='btn btn-light mt-4'>DOWNLOAD CV</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe