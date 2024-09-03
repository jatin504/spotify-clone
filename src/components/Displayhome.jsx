import React, { Component } from "react";
import Navbar from "./Navbar";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import Footer from "./Footer";

export default class Displayhome extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Popular Artist</h1>
          <div className="flex overflow-auto">
            <ArtistCard />
          </div>
        </div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Popular Album</h1>
          <div className="flex overflow-auto">
            <AlbumCard />
          </div>
          <div className="mb-4 mt-4">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
