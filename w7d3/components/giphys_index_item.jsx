import React from 'react';

export const giphyIndexItems = (giphys) => {
  if (giphys) {
    return giphys.map( (giphy, idx) => (
        <li key={idx} className='giphy-li'>
          <img src={giphy.images.fixed_height.url}/>
        </li>
      )
    );
  } else {
    return (
      <div></div>
    );
  }
};
