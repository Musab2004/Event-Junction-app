import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
  
    <i class="fa fa-heart" style="font-size:24px"></i>
     

  );
}

export default LikeButton;