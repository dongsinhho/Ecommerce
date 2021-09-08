import React, { useState } from 'react'

import './LandingPage.css'
import Button from '../../Utils/Button'

const LandingPage = () => {


    const data = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200',
        'https://picsum.photos/200', 'https://picsum.photos/300', 'https://picsum.photos/200', 'https://picsum.photos/200']; // dữ liệU fetch từ api 

    const [carousel, setCarousel] = useState(0);

    function next() {
        setCarousel((carousel + 1) % 10);
    }

    function back() {
        setCarousel((carousel - 1) % 10);
    }

    return (
        <>
            <div className="background" />
            <div className="container">
                <div className="section1">
                    <p> Your one-stop shop <br />for wholesale </p>
                    <p>Shop over 20.000 independent brands, all in one place.</p>
                    <div>
                        <Button buttonSize='btn--medium' buttonStyle='btn--primary'>Sign Up to Shop </Button>
                        <Button buttonSize='btn--medium' buttonStyle='btn--outline'>Join us as brand </Button>
                    </div>
                </div>
                <div className="section2">
                    <div className="tag-info">
                        <h3>Net 60 terms <br />with all brands</h3>
                        <p>Buy new products for resale in your store, and pay 60 days later.</p>
                        <a href="/product">About Net 60 Terms</a>
                    </div>
                    <div className="tag-info">
                        <h3>Unique products <br />curated for your store</h3>
                        <p>The more you shop our wholesale website, the better recommendations you’ll get.</p>
                        <a href="/product">Shop Bestsellers</a>
                    </div>
                    <div className="tag-info">
                        <h3>Free returns <br />on opening orders</h3>
                        <p>We'll give you a prepaid shipping label in case you'd like to send products back.</p>
                        <a href="/product">Shop New Arrivals</a>
                    </div>
                </div >
                <div className="section3">
                    <h1>Popular products</h1>  {/*lấy từ api 10 sản phẩm bán ra nhiều nhất*/}
                    <div id='slide'>
                        <button onClick={next}>lùi</button>
                        <img src={data[carousel]} alt="ảnh"></img>
                        <img src={data[carousel + 1]} alt="ảnh"></img>
                        <img src={data[carousel + 2]} alt="ảnh"></img>
                        <button onClick={back}>tiến</button>
                    </div>
                </div>
            </div >

        </>
    )
}

export default LandingPage
