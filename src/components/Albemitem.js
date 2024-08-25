import React, { Component } from 'react'
import img1 from '../assets/images/karan_aujla.jpg'


export default class Albemitem extends Component {
  render() {
    return (
      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={img1} alt="" className='rounded' />
        <p className='font-bold mt-2 mb-1'>Making Memories</p>
        <p className='text-slate-200 text-sm'>Karan Aujla, Ikky</p>
      </div>
    )
  }
}
