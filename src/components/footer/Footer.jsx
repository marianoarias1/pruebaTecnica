import React from 'react'
import "./footerStyles.css"

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='section-about'>
                <div className='questions'>
                    <ul>
                        <li>CONDICIONES</li>
                        <li>TRABAJA CON NOSOTROS</li>
                        <li>MEDIOS DE PAGO</li>
                        <li>PREGUNTAS FRECUENTES</li>
                    </ul>
                </div>

                <div className='button-footer-container'>
                    <button>BOTON DE ARREPENTIMIENTO</button>
                </div>

                <div className='logos-container'>
                    <div className='pierce-container'>
                        <p>Powered by Pierce commerce</p>
                        <div className='group-1'>
                            <svg width="71" height="15" viewBox="0 0 71 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.91189 6.13908H5.2317C2.66351 6.13908 0.936996 7.75902 0.936996 10.1698C0.936996 11.3365 1.32773 12.3359 2.06718 13.0628C2.83502 13.8175 3.93 14.2171 5.23283 14.2171H8.04296L8.91303 14.213C9.04479 14.213 9.1368 14.1273 9.1368 14.0044V12.4598C9.1368 12.337 9.04479 12.2513 8.91303 12.2513H5.26577C3.76189 12.2513 2.82821 11.4532 2.82821 10.1688C2.82821 8.88441 3.76189 8.1018 5.26577 8.1018L8.91189 8.09767C9.04365 8.09767 9.13566 8.01197 9.13566 7.88911V6.34454C9.13566 6.22168 9.04365 6.13599 8.91189 6.13599V6.13908Z" fill="white" />
                                <path d="M21.5541 1.1543C20.7862 0.399564 19.6912 0 18.3884 0L14.7082 0.00412986C14.5764 0.00412986 14.4844 0.0898244 14.4844 0.212688V1.75725C14.4844 1.88012 14.5764 1.96581 14.7082 1.96581H18.3543C19.8582 1.96581 20.7919 2.76391 20.7919 4.04829C20.7919 5.33268 19.8582 6.11529 18.3543 6.11529L14.7082 6.11942C14.5764 6.11942 14.4844 6.20511 14.4844 6.32797V7.87254C14.4844 7.9954 14.5764 8.0811 14.7082 8.0811H18.3884C20.9577 8.0811 22.6831 6.46116 22.6831 4.04933C22.6831 2.88264 22.2924 1.88322 21.5529 1.15636L21.5541 1.1543Z" fill="white" />
                                <path d="M10.9724 1.68621C10.7588 1.50036 10.652 1.26806 10.652 0.990327C10.652 0.712594 10.7588 0.481322 10.9724 0.294446C11.1859 0.108603 11.454 0.0146484 11.7765 0.0146484C12.0991 0.0146484 12.3672 0.10757 12.5807 0.294446C12.7943 0.481322 12.901 0.712594 12.901 0.990327C12.901 1.26806 12.7943 1.50036 12.5807 1.68621C12.3672 1.87308 12.0991 1.96601 11.7765 1.96601C11.454 1.96601 11.1859 1.87308 10.9724 1.68621Z" fill="white" />
                                <path d="M10.9724 7.8095C10.7588 7.62366 10.652 7.39135 10.652 7.11362C10.652 6.83589 10.7588 6.60461 10.9724 6.41774C11.1859 6.23189 11.454 6.13794 11.7765 6.13794C12.0991 6.13794 12.3672 6.23086 12.5807 6.41774C12.7943 6.60461 12.901 6.83589 12.901 7.11362C12.901 7.39135 12.7943 7.62366 12.5807 7.8095C12.3672 7.99638 12.0991 8.0893 11.7765 8.0893C11.454 8.0893 11.1859 7.99638 10.9724 7.8095Z" fill="white" />
                                <path d="M10.9724 13.8969C10.7588 13.7111 10.652 13.4788 10.652 13.201C10.652 12.9233 10.7588 12.692 10.9724 12.5051C11.1859 12.3193 11.454 12.2253 11.7765 12.2253C12.0991 12.2253 12.3672 12.3183 12.5807 12.5051C12.7943 12.692 12.901 12.9233 12.901 13.201C12.901 13.4788 12.7943 13.7111 12.5807 13.8969C12.3672 14.0838 12.0991 14.1767 11.7765 14.1767C11.454 14.1767 11.1859 14.0838 10.9724 13.8969Z" fill="white" />
                                <path d="M33.4204 6.66969C33.1308 7.15702 32.6764 7.54935 32.0597 7.8467C31.4417 8.14508 30.6625 8.29376 29.7232 8.29376H27.8047V12.2884H25.5091V1.88525H29.7232C30.6092 1.88525 31.3634 2.02464 31.9858 2.30237C32.6094 2.58113 33.0763 2.96315 33.3875 3.45047C33.6987 3.93779 33.8543 4.48913 33.8543 5.10448C33.8543 5.66098 33.7089 6.18237 33.4193 6.66969H33.4204ZM31.0351 6.21541C31.3407 5.95213 31.494 5.58148 31.494 5.10448C31.494 4.0906 30.8704 3.58366 29.6244 3.58366H27.8047V6.60981H29.6244C30.2582 6.60981 30.7284 6.47869 31.0351 6.21438V6.21541Z" fill="white" />
                                <path d="M34.5177 3.92031C34.2496 3.68697 34.1156 3.39582 34.1156 3.04788C34.1156 2.69994 34.2496 2.40981 34.5177 2.17544C34.7857 1.94211 35.1219 1.82544 35.5263 1.82544C35.9307 1.82544 36.2669 1.94211 36.535 2.17544C36.803 2.40878 36.9371 2.69994 36.9371 3.04788C36.9371 3.39582 36.803 3.68697 36.535 3.92031C36.2669 4.15365 35.9307 4.27031 35.5263 4.27031C35.1219 4.27031 34.7857 4.15365 34.5177 3.92031ZM36.6576 5.09732V12.2895H34.3621V5.09732H36.6576Z" fill="white" />
                                <path d="M46.0694 8.78624H39.428C39.4825 9.38197 39.712 9.84967 40.1163 10.1873C40.5207 10.5249 41.0182 10.6942 41.6089 10.6942C42.4619 10.6942 43.0684 10.3618 43.4297 9.69584H45.9058C45.6434 10.4908 45.1403 11.1444 44.3974 11.6555C43.6534 12.1676 42.7413 12.4226 41.6588 12.4226C40.7842 12.4226 39.9993 12.246 39.3053 11.8929C38.6113 11.5398 38.0695 11.0411 37.6822 10.3948C37.2937 9.74952 37.0995 9.00409 37.0995 8.15953C37.0995 7.31497 37.2903 6.55508 37.6731 5.90876C38.0559 5.26347 38.5909 4.76582 39.2803 4.41788C39.9687 4.06994 40.7615 3.89648 41.6577 3.89648C42.5539 3.89648 43.2945 4.06581 43.9783 4.40342C44.6609 4.74104 45.1914 5.22114 45.5685 5.84165C45.9456 6.46319 46.1341 7.17559 46.1341 7.98091C46.1341 8.2793 46.1126 8.54774 46.0683 8.78624H46.0694ZM43.7568 7.38518C43.7454 6.8483 43.533 6.41879 43.1173 6.09563C42.7016 5.77247 42.1938 5.61141 41.5918 5.61141C41.0228 5.61141 40.5446 5.76834 40.1572 6.08118C39.7688 6.39402 39.5314 6.82868 39.4439 7.38518H43.7568Z" fill="white" />
                                <path d="M50.1426 4.28483C50.6185 4.03704 51.1615 3.91211 51.7737 3.91211V6.103H51.1671C50.4459 6.103 49.9018 6.25684 49.536 6.56554C49.1692 6.87322 48.9863 7.4101 48.9863 8.17515V12.2895H46.6907V4.03188H48.9863V5.3142C49.2816 4.87746 49.6667 4.53469 50.1426 4.28586V4.28483Z" fill="white" />
                                <path d="M52.6381 5.91702C53.0209 5.27586 53.5502 4.77924 54.2283 4.42614C54.9064 4.07304 55.6822 3.89648 56.5568 3.89648C57.6825 3.89648 58.615 4.15254 59.3522 4.66361C60.0905 5.17571 60.5846 5.89327 60.8356 6.81733H58.3594C58.2288 6.45906 58.0073 6.17926 57.695 5.97483C57.3837 5.77144 56.9975 5.66923 56.5386 5.66923C55.8833 5.66923 55.363 5.88501 54.9814 6.31761C54.5986 6.75022 54.4078 7.3635 54.4078 8.1585C54.4078 8.95349 54.5986 9.55232 54.9814 9.98389C55.3642 10.4165 55.8833 10.6323 56.5386 10.6323C57.4678 10.6323 58.0743 10.2544 58.3583 9.49967H60.8345C60.5835 10.3938 60.0859 11.1041 59.342 11.6307C58.598 12.1572 57.6688 12.4205 56.5545 12.4205C55.6799 12.4205 54.9041 12.244 54.226 11.8909C53.5479 11.5378 53.0175 11.0411 52.6358 10.4C52.253 9.75882 52.0622 9.01131 52.0622 8.15643C52.0622 7.30155 52.253 6.55405 52.6358 5.91289L52.6381 5.91702Z" fill="white" />
                                <path d="M70.2428 8.78624H63.6015C63.656 9.38197 63.8854 9.84967 64.2898 10.1873C64.6942 10.5249 65.1917 10.6942 65.7823 10.6942C66.6353 10.6942 67.2419 10.3618 67.6031 9.69584H70.0793C69.8169 10.4908 69.3137 11.1444 68.5709 11.6555C67.8269 12.1676 66.9148 12.4226 65.8323 12.4226C64.9577 12.4226 64.1728 12.246 63.4788 11.8929C62.7848 11.5398 62.243 11.0411 61.8556 10.3948C61.4672 9.74952 61.2729 9.00409 61.2729 8.15953C61.2729 7.31497 61.4638 6.55508 61.8465 5.90876C62.2293 5.26347 62.7643 4.76582 63.4538 4.41788C64.1421 4.06994 64.935 3.89648 65.8312 3.89648C66.7274 3.89648 67.4679 4.06581 68.1517 4.40342C68.8344 4.74104 69.3648 5.22114 69.7419 5.84165C70.119 6.46319 70.3076 7.17559 70.3076 7.98091C70.3076 8.2793 70.286 8.54774 70.2417 8.78624H70.2428ZM67.9302 7.38518C67.9189 6.8483 67.7065 6.41879 67.2907 6.09563C66.875 5.77247 66.3673 5.61141 65.7653 5.61141C65.1962 5.61141 64.718 5.76834 64.3307 6.08118C63.9422 6.39402 63.7048 6.82868 63.6174 7.38518H67.9302Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                    <div className='vtex-container'>
                        <img src="https://www.wagento.com/wp-content/uploads/2022/03/Page-1.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='section-title'>
                <h4>Mi Tienda</h4>
            </div>

            <div className='section-find-us'>
                <div className='title-find-us-container'>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 0C5.89494 0.0541214 3.89071 0.933518 2.40174 2.45633C0.912763 3.97915 0.0529187 6.02891 0 8.18182C0.0746255 9.5038 0.431266 10.7931 1.04489 11.9591C1.06355 11.9955 1.084 12.0318 1.10622 12.0682C5.944 20 7.38489 20 8 20C8.95956 20 10 19.3091 12.4636 15.7864C13.7484 13.95 14.848 12.1455 14.8942 12.0682C14.9164 12.0318 14.9364 11.9955 14.9551 11.9591C15.5686 10.793 15.9253 9.50379 16 8.18182C15.9471 6.02891 15.0872 3.97915 13.5983 2.45633C12.1093 0.933518 10.1051 0.0541214 8 0ZM13.7622 11.35C13.7622 11.35 9.32756 18.6364 8 18.6364C6.68356 18.6364 2.23778 11.35 2.23778 11.35C1.71766 10.3725 1.4092 9.29199 1.33333 8.18182C1.33333 6.37352 2.03571 4.63931 3.28595 3.36065C4.5362 2.08199 6.23189 1.36364 8 1.36364C9.76811 1.36364 11.4638 2.08199 12.714 3.36065C13.9643 4.63931 14.6667 6.37352 14.6667 8.18182C14.5909 9.292 14.2824 10.3725 13.7622 11.35ZM8 4.09091C7.29678 4.09091 6.60935 4.30419 6.02464 4.70376C5.43993 5.10333 4.98421 5.67121 4.71509 6.33567C4.44598 7.00013 4.37557 7.73128 4.51276 8.43667C4.64996 9.14205 4.98859 9.79002 5.48584 10.2986C5.9831 10.8071 6.61664 11.1535 7.30635 11.2938C7.99606 11.4341 8.71096 11.362 9.36065 11.0868C10.0103 10.8116 10.5656 10.3455 10.9563 9.74754C11.347 9.14954 11.5556 8.44648 11.5556 7.72727C11.5544 6.76322 11.1794 5.83899 10.5129 5.1573C9.84632 4.47561 8.94263 4.09211 8 4.09091ZM8 10C7.56049 10 7.13084 9.86671 6.7654 9.61698C6.39996 9.36725 6.11513 9.01231 5.94693 8.59702C5.77874 8.18174 5.73473 7.72475 5.82048 7.28388C5.90622 6.84301 6.11787 6.43806 6.42865 6.12022C6.73943 5.80237 7.1354 5.58591 7.56647 5.49821C7.99754 5.41052 8.44435 5.45554 8.85041 5.62755C9.25646 5.79957 9.60353 6.09087 9.84771 6.46462C10.0919 6.83837 10.2222 7.27777 10.2222 7.72727C10.2222 8.33004 9.9881 8.90811 9.57135 9.33433C9.1546 9.76055 8.58937 10 8 10Z" fill="white" />
                    </svg>
                    <p>SUCURSALES</p>
                </div>

                <div className="contact-data-container">
                    <p>Whatsapp 2215137270</p>
                    <p>ecommerce@mateu.com.ar</p>
                    <p>La Plata 1900, Buenos Aires, Argentina</p>
                </div>

                <div className='data-fiscal-logo-container'>
                    <p>© 2023 MateuSports</p>
                    <img src="https://argenbio.org/images/iconos/DATAWEB.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
