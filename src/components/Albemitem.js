import React, { Component } from "react";
import { albumData } from "../assets/images/assets";
import { FaPlay } from "react-icons/fa";
export default class Albemitem extends Component {
  render() {
    return (
      <div className="flex overflow-auto">
        {albumData.map((album) => (
          <div
            key={album.id}
            className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] m-2 relative group"
          >
            <img
              src={album.image}
              alt={album.name}
              className="rounded-full object-cover"
            />
            <p className="font-bold mt-2 mb-1">{album.name}</p>
            <p className="text-slate-200 text-sm">{album.desc}</p>
            <div className="bg-green-600 p-3 absolute bottom-16 right-1 flex items-center justify-center rounded-full w-14 text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0  transition-all duration-300">
              <FaPlay className="text-[30px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
