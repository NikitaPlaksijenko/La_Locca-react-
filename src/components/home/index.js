import React from 'react';
import '../../css/home/index.css';
import OurChemicalNeighbor from './OurChemicalNeighbor';
import AboutOurFamily from './AboutOurFamily';
import OrganicWines from './OrganicWines';
import Feedback from './Feedback';
import OrderBottles1 from './OrderBottles1';
import OrderBottles2 from './OrderBottles2';
import OrderBottles3 from './OrderBottles3';
// import Grapes from './Grapes';
// import Poles from './Poles';

const Home = () => {
  return (
    <div className="home">
      <img className="w-100"
        src={require('../../assets/larocca presentation-black and white.jpg')}
        alt='background'
      />
      {/* <Grapes />
      <Poles /> */}
      <OurChemicalNeighbor />
      <AboutOurFamily />
      <OrganicWines />
      <OrderBottles1 />
      <OrderBottles2 />
      <OrderBottles3 />
      <Feedback />
    </div>
  );
}

export default Home;





