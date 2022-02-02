import React from 'react';
import './Home.css';
import Product from './Product.js';
import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""/>
           {/* <Carousel/> */}
        {/* <Carousel.Item interval={1500}> */}
        {/* <img style={{ display: 'block', width: 700, padding: 30 }} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""/> */}
           {/* </Carousel.Item> */}
        {/* <Carousel.Item interval={500}> */}
          {/* <img
            className="d-block w-100"
src="https://m.media-amazon.com/images/I/71UPhOgl2sL._SX3000_.jpg" alt="carousel item"
            
          />
           </Carousel.Item>
        <Carousel.Item interval={500}>
        <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61xWsTvRlaL._SX3000_.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel/> */}


        <div className="home__row">
            <Product 
            id="12321341"
            title="The First 90 Days: Proven Strategies for Getting Up to Speed Faster and Smarter, Updated and Expanded"  
            price={20.96}
            image="https://m.media-amazon.com/images/I/71lVV7lbZSL._AC_SY200_.jpg"
            rating={3}/>

            <Product id="49538094"
            title="Amazon Basics Padded Office Desk Chair with Armrests, Adjustable Height/Tilt, 360-Degree Swivel, 275Lb Capacity - Black"
            price={78.64}
            rating={4}
            image="https://m.media-amazon.com/images/I/61v4APY-tIL._AC_UL320_.jpg"/>
            {/*product*/}
            
        </div>
        <div className="home__row">
            <Product 
            id="12329341"
            title="Donerton Gaming Headset, Over-Ear Gaming Headphones with Noise Canceling Mic, Stereo Bass Surround Sound, LED Light, Soft Memory Earmuffs PS4 Gaming Headset Compatible with PC, Laptop,Tablet"  
            price={28.99}
            image="https://m.media-amazon.com/images/I/71rgz+jOhLL._AC_UY218_.jpg"
            rating={3}/>

            <Product id="49533394"
            title="100ft Led Lights USTO Music Sync Color Changing Led Strip Lights Led Lights Strip with Phone App Control and Remote Led Lights for Bedroom Living Room Party Home Decoration"
            price={28.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71sT06szdmL._AC_UL320_.jpg"/>
            {/*product*/}

            <Product id="465533394"
            title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6 Full HD 144 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard "
            price={1,283.56}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Nly9vPapL._AC_UY218_.jpg"/>
            {/*product*/}
            
        </div>
        
        <div className="home__row">

        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />

             <Product id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            
            {/*product*/}
            {/*product*/}
            {/*product*/}
            
        </div>
        
        <div className="home__row">
        
            <Product      
            id="90829332"
            title="Gravastar Bluetooth Speakers Mars Pro Incarnation Version, 15H Playtime, Stereo Sound Portable Wireless Speaker with Cool Design0"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Y7JGiSSvL._AC_UL320_.jpg"/>

            {/*product*/}

        </div>

        </div>
        </div>
    );
}

export default Home;
