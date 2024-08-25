import React, { Component } from "react";
import home from "../assets/images/home.png";
import search from "../assets/images/search.png";
import stack from "../assets/images/stack.png";
import arrow_icon from "../assets/images/arrow.png";
import plus_icon from "../assets/images/plus.png";
import spotify_logo from "../assets/images/spotifylogo.png"

export default class Sidebar extends Component {
  render() {
    return (
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[30%] rounded flex flex-col justify-around">
          <div className="flex items-center gap-2 pl-6 cursor-pointer">
            <img className="w-[7rem] " src={spotify_logo} alt="" />
            
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={home} alt="" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img className="w-6" src={search} alt="" />
            <p className="font-bold">Search</p>
          </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <img src={stack} alt="" className="w-8" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={arrow_icon} alt="" className="w-5" />
              <img src={plus_icon} alt="" className="w-5" />
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your First Playlist</h1>
            <p className="font-light">It's easy, we'll help you</p>
            <button className="px-4 py-1.5 text-[15px] bg-white text-black rounded-full m-4">Create Playlist</button>
          </div>
          {/* <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your First Playlist</h1>
            <p className="font-light">It's easy, we'll help you</p>
            <button className="px-4 py-1.5 text-[15px] bg-white text-black rounded-full m-4">Create Playlist</button>
          </div> */}
        </div>
      </div>
    );
  }
}
