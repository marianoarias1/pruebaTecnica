import React from 'react'
import "./shippingStyles.css"
export const Shipping = () => {
    return (
        <div className='shipping-data-container'>
            <div className='item-1'>
                <div className='image-container'>
                    <svg width="52" height="64" viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.7358 15.8334H6.26437C4.16811 15.8334 2.46875 17.5327 2.46875 19.629V53.098C2.46875 57.5082 6.04394 61.0834 10.4542 61.0834H41.546C45.9562 61.0834 49.5314 57.5082 49.5314 53.098V19.629C49.5314 17.5327 47.832 15.8334 45.7358 15.8334Z" stroke="black" strokeWidth="4" />
                        <path d="M15.2345 25.75V9.65982C15.2345 9.55348 15.2428 9.44903 15.2648 9.34499C15.8015 6.7994 18.7139 2 26.4487 2C34.3435 2 36.6163 7 36.7658 9.5V25.75" stroke="black" strokeWidth="4" strokeLinecap="round" />
                    </svg>

                </div>

                <div className='text-container'>
                    <p>Elegí los productos que vas a comprar</p>
                    <small>Si querés más de uno, sumalos a tu carrito</small>
                </div>
            </div>

            <div className='item-2'>
                <div className='box-container'>
                    <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.8005 0H8.19956C6.27228 0 4.42393 0.711159 3.06114 1.97703C1.69835 3.2429 0.932739 4.95979 0.932739 6.75L0.932739 54H59.0673V6.75C59.0673 4.95979 58.3017 3.2429 56.9389 1.97703C55.5761 0.711159 53.7278 0 51.8005 0ZM54.2228 6.75V11.25H37.2668V4.5H51.8005C52.4429 4.5 53.059 4.73705 53.5133 5.15901C53.9676 5.58097 54.2228 6.15326 54.2228 6.75ZM27.5777 4.5H32.4223V18H27.5777V4.5ZM8.19956 4.5H22.7332V11.25H5.77729V6.75C5.77729 6.15326 6.03249 5.58097 6.48675 5.15901C6.94102 4.73705 7.55713 4.5 8.19956 4.5ZM5.77729 49.5V15.75H22.7332V22.5H37.2668V15.75H54.2228V49.5H5.77729ZM37.2668 40.5H49.3782V45H37.2668V40.5Z" fill="black" />
                    </svg>

                </div>

                <div className='text-container'>
                    <p>Pagá con el medio de pago que quieras</p>
                    <small>Comprá con seguridad: usamos la tecnología de Mercado Pago.</small>
                </div>
            </div>

            <div className='item-3'>
                <div className='box-container'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3233/3233997.png" alt="" />
                </div>

                <div className='text-container'>
                    <p>Recibí el producto que esperás</p>
                    <small>Elegí la forma de entrega que prefieras ¡y listo! Aseguramos tu entrega con Mercado Envíos.</small>
                </div>
            </div>
        </div>
    )
}
