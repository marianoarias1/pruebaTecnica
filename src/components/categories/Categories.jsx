import React from 'react'
import "./categoriesStyles.css"


export const Categories = () => {
    return (
        <div className='categories-container'>
            <div className='title-categories-container'>
                <h3>
                    VISITÁ LA CATEGORÍAS MÁS POPULARES
                </h3>
            </div>
            <div className='categories-card'>
                <div className='c1 box'>
                    <div className='zapatillas'>
                        <img src="../../../images/categoriesImage/zapatillas.png" alt="" />
                        <p>ZAPATILLAS</p>
                    </div>
                </div>

                <div className='c2 box'>
                    <div className='futbol'>
                        <img src="../../../images/categoriesImage/botines.png" alt="" />
                        <p>FÚTBOL</p>
                    </div>
                </div>

                <div className=' c3 box'>
                    <div className='calzas'>
                        <img src="../../../images/categoriesImage/calzas.png" alt="" />
                        <p>CALZAS</p>
                    </div>
                </div>

                <div className='c4 box'>
                    <div className='pelotas'>
                        <img src="../../../images/categoriesImage/pelotas.png" alt="" />
                        <p>PELOTAS</p>
                    </div>
                </div>
            </div>
            
            <div className='group-categories'>
                <span className='ellipse-categories filled-categories'></span>
                <span className='ellipse-categories'></span>
                <span className='ellipse-categories'></span>
                <span className='ellipse-categories'></span>
            </div>
        </div>
    )
}
