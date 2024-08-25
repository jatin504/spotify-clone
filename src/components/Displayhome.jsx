import React, { Component } from 'react'
import Navbar from './Navbar'
import Albemitem from './Albemitem'

export default class Displayhome extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured chatrt</h1>
        <div className='flex overflow-auto'>
          <Albemitem/>
          <Albemitem/>
          <Albemitem/>
          <Albemitem/>
          <Albemitem/>
          <Albemitem/>
        </div>
        </div>
      </>
    )
  }
}
