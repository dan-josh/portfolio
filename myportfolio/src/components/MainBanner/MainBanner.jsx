import React from 'react'
import {AiFillYoutube,AiFillLinkedin, AiFillInstagram, AiFillGithub} from "react-icons/ai"
import potrait from "../../images/mainBanner.jpg";


const MainBanner = () => {
  return (
    <div>
        <div className="container-fluid row m-auto text-light pt-5 pb-5" style={{backgroundColor:"#000"}} >
            <div className='col col-md-5 text-center d-flex align-items-center'>
                <div className='container'>
                    <div>
                        <AiFillYoutube color={"#fff"} className="me-3" fontSize={"1.5rem"} />
                        <AiFillLinkedin color='#fff' className="me-3" fontSize={"1.5rem"} />
                        <AiFillInstagram color='#fff' className="me-3" fontSize={"1.5rem"} />
                        <AiFillGithub color="#fff" className="me-3" fontSize={"1.5rem"} />
                    </div>
                    <div className='mt-4'>
                        <h1>Hi, I am <span className='' style={{fontSize:"50px"}}>Daniel Dsouza</span></h1>
                        <p>I'm a Front-End Developer & Graphic Designer </p>
                    </div>
                </div>
            </div>
            <div className='col col-md-6 pb-5'>
                <img className='image-fluid' style={{width:"100%"}} src={potrait} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MainBanner