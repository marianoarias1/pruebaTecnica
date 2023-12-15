import React from 'react'
import "./porductCardStyles.css"
export const ProductCard = ({prod}) => {
    return (
        <div className='card-product' key={prod.id}>
            <div className="image-prod-container">
                <img src={prod?.src} alt="" />
            </div>
            <div className='name-container'>
                <p>{prod.name}</p>
            </div>
            <div className='price-container'>
                <p>{prod.price}</p>
            </div>
            <div className='button-container'>
                <button>Comprar</button>
            </div>
        </div>
    )
}
