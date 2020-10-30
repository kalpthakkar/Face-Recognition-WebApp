import React from 'react';
import './Rank.css'

const Rank = ({ name, entries }) => {
  return (
    <div>
      { window.matchMedia("only screen and (max-width: 760px)").matches
        ? <div className="ph2">
            <div className='white f3'>
              {`${name}, your current entry count is `} <b>{`${entries}`}</b>
            </div>
            
          </div>
        : <div>
            <div className='white f3'>
              {`${name}, your current entry count is...`}
            </div>
            <div className='white f1'>
              {entries}
            </div>
          </div>
      }
    </div>
  );
}

export default Rank;