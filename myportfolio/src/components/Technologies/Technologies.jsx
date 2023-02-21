import React from 'react'
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {BsFillBootstrapFill} from "react-icons/bs"

const Technologies = () => {
  return (
    <div className='text-light text-center mt-5 border border-light' style={{width:"100%"}}>
        <div className='py-5'>
            <h2>TECHNOLOGIES</h2>
        </div>
        <div className='container row m-auto justify-content-center my-5'>
            <div className='col col-md-4 my-3' >
                <AiFillHtml5  fontSize={"6rem"}/>
                <p className='mt-2'>HTML</p>
            </div>
            <div className='col col-md-4 my-3'>
                <DiCss3 fontSize={"6rem"} />
                <p className='mt-2'>CSS</p>
            </div>
            <div className='col col-md-4 my-3'>
                <TbBrandJavascript fontSize={"6rem"} />
                <p className='mt-2'>JAVASCRIPT</p>
            </div>
            <div className='col col-md-4 my-3'>
                <FaReact fontSize={"6rem"} />
                <p className='mt-2'>REACT</p>
            </div>
            <div className='col col-md-4 my-3'>
                <BsFillBootstrapFill fontSize={"6rem"} />
                <p className='mt-2'>BOOTSTRAP</p>
            </div>
        </div>
    </div>
  )
}

export default Technologies