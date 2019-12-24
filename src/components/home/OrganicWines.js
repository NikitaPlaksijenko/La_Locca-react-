import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/home/OrganicWines.css';

const OrganicWines = () => {
  return (
    <Link to='/organic-wines'>
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip className='tooltip'>
            Organic Wines
        </Tooltip>
        }
      >
        <div className='cursor-pointer organic-wines'>
          <img className='w-100' src={require('../../assets/barral-01.png')} alt='barral' />
        </div>
      </OverlayTrigger>
    </Link>
  );
}

export default OrganicWines;