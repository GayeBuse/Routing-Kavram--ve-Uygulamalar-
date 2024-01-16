import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  const homeRoutingHandler = () => {
    history.push('/');
  };

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
        </span>
      ))}
      {/* Görev 4: Anasayfa butonu ana sayfayı açmalı */}
      <div onClick={homeRoutingHandler} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}
