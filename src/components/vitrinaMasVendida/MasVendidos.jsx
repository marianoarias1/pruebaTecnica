import React from 'react'
import "./masVendidosStyles.css"
import { products } from '../../products'
import { ProductCard } from '../productCard/ProductCard'

export const MasVendidos = () => {
  return (
    <div className='mas-vendidos-container'>
            <div className="title-mas-vendidas-container">
                <h2> LOS MAS VENDIDOS </h2>
            </div>


            <div className="products-container-mas-vendidos">
                {
                    products.map((prod) => {
                        return (
                            <ProductCard key={prod.id} prod={prod}/>
                        )
                    })
                }
            </div>

            <div className='group-mas-vendidos'>
                <span className='ellipse-mas-vendidos filled-mas-vendidos'></span>
                <span className='ellipse-mas-vendidos'></span>
                <span className='ellipse-mas-vendidos'></span>
                <span className='ellipse-mas-vendidos'></span>
            </div>

            <div className='frame-79 no-visible'>
                <div className="group-1240">
                    <span className='ellipse-products'>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.69124 18.0738C10.0539 18.4266 10.0902 19.082 9.83631 19.5861C9.58243 20.0399 9.11094 20.1407 8.78453 19.7878L0.297739 10.8647C-0.0286762 10.5118 -0.101213 9.80601 0.152666 9.35229C0.188934 9.25146 0.261471 9.20105 0.297739 9.15064L8.78453 0.227528C9.11095 -0.125364 9.58243 -0.0749512 9.83631 0.42918C10.0902 0.882898 10.0539 1.53827 9.69124 1.89116L2.03862 10.0077L9.69124 18.0738Z" fill="black" />
                        </svg>
                    </span>
                </div>

                <div className="group-1239">
                    <span className='ellipse-products'>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.308762 1.92625C-0.0539213 1.57336 -0.0901896 0.917987 0.163689 0.413857C0.417567 -0.0398607 0.889055 -0.140687 1.21547 0.212205L9.70226 9.13532C10.0287 9.48821 10.1012 10.194 9.84733 10.6477C9.81107 10.7485 9.73853 10.7989 9.70226 10.8494L1.21547 19.7725C0.889055 20.1254 0.417567 20.075 0.163689 19.5708C-0.0901896 19.1171 -0.0539213 18.4617 0.308762 18.1088L7.96138 9.99234L0.308762 1.92625Z" fill="black" />
                        </svg>

                    </span>
                </div>
            </div>
        </div>
  )
}
