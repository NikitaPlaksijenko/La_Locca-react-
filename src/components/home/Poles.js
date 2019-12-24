import React from 'react';
import '../../css/home/Poles.css';

const Poles = () => {
  const poles = [0, 1, 2, 3, 4];
  return (
    <>
      {poles.map((val) => {
        return (
          <div className={`pole-${val}`}>
            <img className='w-100 h-100'
              src={require('../../assets/POLE.png')}
              alt='Pole'
            />
          </div>
        )
      })}
    </>
  );
}

export default Poles;