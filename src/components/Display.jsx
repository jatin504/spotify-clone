import React, { Component } from 'react'
import Displayhome from './Displayhome'

export default class Display extends Component {
  render() {
    return (
      <div className='w-[1000%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Displayhome/>
      </div>
    )
  }
}
