import React from 'react';
import './card.css';
import img001 from '../../assets/images/001.png';
import img002 from '../../assets/images/002.png';
import img003 from '../../assets/images/003-Gmax.png';
import img004 from '../../assets/images/003-Mega.png';
import img005 from '../../assets/images/003.png';
import img006 from '../../assets/images/004.png';
import img007 from '../../assets/images/005.png';
import img008 from '../../assets/images/006-Gmax.png';
import img009 from '../../assets/images/006-Mega-X.png';
import img0010 from '../../assets/images/006-Mega-Y.png';
import img0011 from '../../assets/images/012.png';
import img0012 from '../../assets/images/019-Alola.png';

const cards = [
  { id: '#0001', name: 'Bulbasaur', img: img001, boxDescription1: 'Grass', boxDescription2: 'Poison' },
  { id: '#0002', name: 'Ivisaur', img: img002, boxDescription1: 'Grass', boxDescription2: 'Poison' },
  { id: '#0003', name: 'Venusaur', img: img003, boxDescription1: 'Grass', boxDescription2: 'Poison' },
  { id: '#0004', name: 'Charmander', img: img004, boxDescription1: 'Fire' },
  { id: '#0005', name: 'Charmeleon', img: img005, boxDescription1: 'Fire' },
  { id: '#0006', name: 'Charizard', img: img006, boxDescription1: 'Fire', boxDescription2: 'Flying' },
  { id: '#0007', name: 'Squirtle', img: img007, boxDescription1: 'Water' },
  { id: '#0008', name: 'Wartortle', img: img008, boxDescription1: 'Water' },
  { id: '#0009', name: 'Blatoise', img: img009, boxDescription1: 'Water' },
  { id: '#0010', name: 'Metapod', img: img0010, boxDescription1: 'Bug' },
  { id: '#0011', name: 'Caterpie', img: img0011, boxDescription1: 'Bug' },
  { id: '#0012', name: 'Butterfree', img: img0012, boxDescription1: 'Bug', boxDescription2: 'Flying' },
];

const renderBoxDescription2 = (description) => {
  if (!description) {
    return null
  } else {
    return <div className='box-description-2'>{description}</div>
  }
}

function Card() {
  return (
    <div className="layout">
      {cards.map(card =>{return (
        <div className="layout-item">
          <img src={card.img} alt="" className="layout-image" />
          <section className='id-item'>{card.id}</section>
          <section className='name-item'>{card.name}</section>
          <div className='father'>
            <div className='box-description-1'>{card.boxDescription1}</div>
            { renderBoxDescription2(card.boxDescription2)}
        
          </div>
        </div>
        )})}
      
    </div>
  )
}

export default Card