import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { resultCast } from '../../services/fetch';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    resultCast(movieId)
      .then(data => setCast(data.cast))
      .catch(error => console.error('Error while requesting data:', error));
  }, [movieId]);

  return (
    <div className={css.castBox}>
      {cast && cast.length > 0 ? (
        <p>
          {cast.map(item => (
            <li key={item.id} className={css.castList}>
              <img
                className={css.castImg}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </p>
      ) : (
        <p>No cast available</p>
      )}
    </div>
  );
}
