import React from 'react';
import FavIcon from './FavIcon';
import useApplicationData from '../hooks/useApplicationData';


import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;