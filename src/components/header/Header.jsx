import React from 'react'
import "./headerStyles.css"

export const Header = () => {
  return (
    <div className='header-container'>
        <div className='group'>
            <span className='ellipse filled'></span>
            <span className='ellipse'></span>
            <span className='ellipse'></span>
            <span className='ellipse'></span>
        </div>
        <img src="../../../images/bannerImage.png" alt="imagen de hombre en bicicleta" />
    </div>
  )
}
