import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/home/AboutOurFamily.css';

const AboutOurFamily = () => {
  return (
    <>
      <Link to='/about'>
        <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip className='tooltip'>
              About Our Family
          </Tooltip>
          }
        >
          <div className='cursor-pointer about-our-family'>
            <img className='w-100'
              src={require('../../assets/F HOUSE.png')}
              alt='About Our Family' />
          </div>
        </OverlayTrigger>
      </Link>
      <div className='phil'>
        <img className='w-100'
          src={require('../../assets/phil.jpeg')}
          alt='Phil' />
      </div>
    </>
  );
}

export default AboutOurFamily;