import React, { Component } from 'react'

export default class Albemitem extends Component {
  render() {
    return (
      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src="" alt="" className='rounded' />
        <p className='font-bold mt-2 mb-1'>name</p>
        <p className='text-slate-200 text-sm'>Description</p>
      </div>
    )
  }
}
