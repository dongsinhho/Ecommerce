import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <section>
                <div className="tag-footer">
                    <div className="title-tag-footer">Về Ecommerce</div>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Tuyển dụng</li>
                        <li>Hỗ trợ khách hàng</li>
                        <li>Chính sách</li>
                    </ul>
                </div>
                <div className="tag-footer">
                    <div className="title-tag-footer">Phương thức thanh toán</div>
                    <div className="atm-icon">
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg' alt='visa'/>
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg' alt='mastercard'/>
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg' alt='jcb'/>
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg' alt='cash'/>
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg' alt='internet-banking'/>
                        <img src='https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg' alt='installment'/>
                    </div>
                </div>
                <div className="tag-footer">
                    <div className="title-tag-footer">Kết nối với chúng tôi</div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/2048px-Facebook_logo_36x36.svg.png' alt='facebook' width="40px"/>
                    <img src='https://banner2.cleanpng.com/20180320/uaw/kisspng-linkedin-logo-clip-art-linkedin-icons-no-attribution-5ab1767fdc0a03.3958049615215796479013.jpg' alt='linkedin' width="45px"/>
                    <img src='https://image.flaticon.com/icons/png/512/38/38401.png' alt='github' width="39px" />

                </div>
            </section>
            <p>© 2021 by Hồ Ngọc Đông Sinh - Trường đại học Công Nghệ Thông Tin </p>
        </div>
    )
}

export default Footer
