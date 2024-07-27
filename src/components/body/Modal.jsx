import React from 'react'
import './modal.css'

function Modal({ info, close }) {
  
  return (
    <div className="modal-layout">
        <div className="modal-container">
            <img src={info.image} alt="" className="modal-img" />
            <h3 className="modal-moviename">{info.movieName}</h3>
            <p className="modal-description">{info.description}</p>
            <button className='modal-close-btn' onClick={close}>Close</button>

        </div>

        

    </div>
  )
}

export default Modal