import './App.css';

import NavBar from './NavBar/NavBar.js'

import first1 from './pic/first1.png';
import first2 from './pic/first2.png';
import arrProductCards from './arrProductCards.js';
import card6 from './pic/card6.jpg';
import card13 from './pic/card13.jpg';
import card10 from './pic/card10.jpg';
import pic1 from './pic/pic1.png';
import ProductCard from './productCard.js';

import Slider from './component-slider/Slider.js';

import Footer from './Footer/Footer.js'


console.log(arrProductCards[1]);

function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar/>
      </div>
          
      <div className="main container">
        <h1 className="mainTitle">introducing a forig collection </h1>
        <div className="firstScreen" >
          <div className="firstRow1">
            <h1 className="mainTitle1">introducing a forig collection </h1>
            <div className="firstGroup">
              <div className="first1"><img src={first1}  width="200"/></div>
              <div className="firstText">
                <p>changing the way people design and shop for their home</p>
                <button className="firstBtn">see products</button>
              </div>
            </div>
          </div>
          <div className="firstRow2">
            <div className="first2"><img src={first2}/></div>
          </div>
        </div>
      </div>

      <div className="new container">
          <h2 className="titleNew titleSection">New</h2>
          <ul className="newCards">
          <li className="card"><ProductCard card={arrProductCards[0]} /></li>
          <li className="card"><ProductCard card={arrProductCards[1]} /></li>
          <li className="card"><ProductCard card={arrProductCards[3]} /></li>
          <li className="card"><ProductCard card={arrProductCards[2]} /></li>
          </ul>


        </div>

        <div className="about container">
          <h2 className="titleAbout titleSection titleAboutAD">About</h2>


          <div className="row1_About">
            <div>
              <h2 className="titleAbout titleA">About</h2>
            </div>
            <div className="text">
              <p>Forig studio was founded in 2018. We cooperate with famous Italian designers and  architects  with  elegent,  contemporary and simple design. </p>
            </div>
          </div>

          <div className="row2_About">
            <div className="column1">
              <div className="picCard13">
                <img src={card13}/>
              </div>
              <p>Our philosophy balances simplicity and honesty so that the designs may continue to grow 
                 in today’s ever-changing world.</p>
            </div>

            <div className="picCard6 column2">
              <img src={card6}/>
            </div>
          </div>

          <p className="textAdaptive">Our philosophy balances simplicity and honesty so that the designs may continue to grow 
                 in today’s ever-changing world.</p>

          <div className="row3_About">
            <div className="picCard10">
              <img src={card10}/>
            </div>
            <div className="column2">
              <div className="pic1">
              <img src={pic1}/>
              </div>
              <p>We care about our customers, so we make furniture only from high quality materials.</p>
            </div>
          </div>

          <p className="textAdaptive">We care about our customers, so we make furniture only from high quality materials.</p>

        </div>

        <div className="gallery container">
          <h2 className="titleGallery titleSection">Gallery</h2>
          <Slider/>

        </div>
        
        <Footer/>

    </div>
  );
}

export default App;
