import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/home/OurChemicalNeighbor.css';

const OurChemicalNeighbor = () => {
  return (
    <Link to='/neighbors'>
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip className='tooltip'>
            Our Chemical Neighbors
        </Tooltip>
        }
      >
        <div className='cursor-pointer our-chemical-neighbors'>
        </div>
      </OverlayTrigger>
    </Link>
  );
}

export default OurChemicalNeighbor;