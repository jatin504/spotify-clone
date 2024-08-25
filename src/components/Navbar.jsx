import React, { Component } from 'react'
import arrowleft from '../assets/images/left_arrow.png';
import arrowright from '../assets/images/right_arrow.png';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className='w-full flex justify-between items-center font-semibold '>
            <div className='flex items-center gap-2'>
                <img src={arrowleft} alt="" className='w-8 bg-black rounded-2xl cursor-pointer'/>
                <img src={arrowright} alt="" className='w-8 bg-black rounded-2xl cursor-pointer'/>
            </div>
            <div className='flex items-center gap-4'>
              <p className='pt-1 px-3 rounded-2xl text-[15px]'>Signup</p>
              <p className='bg-white text-black text-[15px] px-4 py-1 cursor-pointer rounded-2xl hidden md:block'>Login</p>
              {/* <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center'></p> */}
            </div>
        </div>
       
      </>
    )
  }
}
