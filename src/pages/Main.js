import React from "react";
import "./Main.css";
const Main = () => {
    return (
      <>
      <div className="container">
        <h1 className="bigtext">
          Discover, collect <br />
          <span className="smalltext">and sell Timeless </span>
          <span className="innertext"> NFTs</span>
        </h1>
        <p className="outertext">
          The world's first and largest digital marketplace for crypto
          collectibles and non- fungible tokens (NFTs).
        </p>
        <div className="NFTs">
          <h2 className="NFTz">
            NFT drop coming soon!!
          </h2>
        </div>
      </div>
      <div className="purr">
        <img
          src="https://ipfs.moralis.io:2053/ipfs/Qmb3YUjg9FJHK2eZy5qLZi5JAAVPXPha3dSzx68RhEK3Ht/media/2"
          alt="Main"
          className="w-full h-full object-contain"
        />
      </div>

     </>
    );
  };
export default Main;
