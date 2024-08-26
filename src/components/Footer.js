import React, { Component } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
export default class Footer extends Component {
  render() {
    return (
      <div className='flex items-strenth gap-10'>
        <div className='p-2   w-[180px]'>
            <h1 className='mb-2'>Company</h1>
            <ul className='mt-4'>
            <li className='my-3'><a href="#">About</a></li>
            <li className='my-3'><a href="#">Jobs</a></li>
            <li className='my-3'><a href="#">For The Record</a></li>
            </ul>
        </div>
        <div className='p-2   w-[180px]'>
            <h1 className='mb-2'>Communities</h1>
            <ul className='mt-4'>
            <li className='my-3'><a href="#">For Artists</a></li>
            <li className='my-3'><a href="#">Developers</a></li>
            <li className='my-3'><a href="#">Advertising</a></li>
            <li className='my-3'><a href="#">Investors</a></li>
            <li className='my-3'><a href="#">Vendors</a></li>
            </ul>
        </div>
        <div className='p-2   w-[180px]'>
            <h1 className='mb-2'>Useful links</h1>
            <ul className='mt-4'>
            <li className='my-3'><a href="#">Support</a></li>
            <li className='my-3'><a href="#">Free Mobile App</a></li>
            </ul>
        </div>
        <div className='p-2   w-[180px]'>
            <h1 className='mb-2'>Spotify Plans</h1>
            <ul className='mt-4'>
            <li className='my-3'><a href="#">Premium Individual</a></li>
            <li className='my-3'><a href="#">Premium Duo</a></li>
            <li className='my-3'><a href="#">Premium Family</a></li>
            <li className='my-3'><a href="#">Premium Student</a></li>
            <li className='my-3'><a href="#">Spotify Free</a></li>
            </ul>
        </div>
        <div className='p-2  w-[180px]'>
            {/* <h1 className='mb-2'>Company</h1> */}
            <ul className='mt-0 flex items-center justify-between'>
            <li className='my-3 p-2 text-[23px] bg-[#292929] rounded-2xl'><a href="#"><FaInstagram/></a></li>
            <li className='my-3 p-2 text-[23px] bg-[#292929] rounded-2xl'><a href="#"><FaFacebook/></a></li>
            <li className='my-3 p-2 text-[23px] bg-[#292929] rounded-2xl'><a href="#"><FaTwitter/></a></li>
            </ul>
        </div>
      </div>
    )
  }
}
