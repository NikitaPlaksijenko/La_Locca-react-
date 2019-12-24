import React from 'react';
import '../../css/home/Grapes.css';

const Grapes = () => {
  const grapes = [0, 1, 2, 3, 4];
  return (
    <>
      {grapes.map((val) => {
        return (
          <div className={`grapes-${val}`}>
            <img className='w-100'
              src={require('../../assets/GRAPES-PNG.png')}
              alt='Grapes'
            />
          </div>
        )
      })}
    </>
  );
}

export default Grapes;