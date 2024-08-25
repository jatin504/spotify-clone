import React, { Component } from 'react'
import img2 from '../assets/images/ek_tha_raja.jpg'

export default class Albemitem2 extends Component {
  render() {
    return (
      <div>
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={img2} alt="" className='rounded' />
        <p className='font-bold mt-2 mb-1'>EK THA RAJA</p>
        <p className='text-slate-200 text-sm'>Badshah</p>
      </div>
      </div>
    )
  }
}
