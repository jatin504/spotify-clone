import React, { Component } from 'react'
import Navbar from './Navbar'
import Albemitem from './Albemitem'
import Artisitem from './Artisitem'

export default class Displayhome extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Popular Artist</h1>
        <div className='flex overflow-auto '>
        <Albemitem/>
        </div>
        </div>
        <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Popular Album</h1>
        <div className='flex overflow-auto'>
         
          <Artisitem/>
        </div>
        </div>
      </>
    )
  }
}
