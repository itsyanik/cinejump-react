import React, { useState } from 'react'
import Movie from './movieContainerStyles'
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg'

interface ContainerProps {
  posterSrc: string,
  name: string
}

const MovieContainer: React.FC<ContainerProps> = ({ posterSrc, name }) => {

  const [favorite, setFavorite] = useState(false)

  return (
    <Movie>
      <button onClick={() => setFavorite(!favorite)}>
        <Heart fill={favorite ? '#E83F5B' : 'black'}/>
      </button>
      <img src={posterSrc} alt={`Poster for the movie ${name}`}/>
    </Movie>
  )
}

export default MovieContainer