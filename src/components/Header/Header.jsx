import React from 'react';
import './Header.css';
import baner from '../../assets/images/spy_carousel 1.png'




function Header() {
  return (
    <div className="container-header">
      <div className="navbar">
        <div className="anomine">Anomine</div>
        <div className="home">Home</div>
        <div className="last-anime">Last anime</div>
        <div className="search">
          <input type="search" placeholder="Search anime or movie"/>
        </div>
      </div>
      <span className='explore'>Explore</span>
      <span className='intro'>What are you gonna watch today ?</span>
      <div className="carousel">
        <div className="baner"> 
          <img src={baner} alt="" className="background-header" />
          <div className="header-on">
            <div className="title">Weather With You</div>
            <div className="lead">  Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </div>
          </div>

          
          
        </div>
      </div>



    </div>


  );
}

export default Header