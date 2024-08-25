import React, { Component } from "react";
// import img2 from "../assets/images/ek_tha_raja.jpg";
import { artistData } from "../assets/images/assets";

export default class Albemitem2 extends Component {
  render() {
    return (
      <div className="overflow-auto flex">
        {artistData.map((album) => {
            
        return  <div 
          key={album.id}
          className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] m-2" style={{backgroundColor:album.bgColor}}>
            <img src={album.image} alt={album.name} className="rounded" />
            <p className="font-bold mt-2 mb-1">{album.name}</p>
            <p className="text-slate-200 text-sm">{album.desc}</p>
          </div>;
        })}
      </div>



    );
  }
}
