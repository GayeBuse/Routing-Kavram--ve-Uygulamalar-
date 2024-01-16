import React, { useState } from 'react';
import { movies } from './sahteVeri';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import Film from './components/Film';
import FilmListesi from './components/FilmListesi';
import { Switch, Route, Link } from 'react-router-dom';

export default function App() {
  const [movieList, setMovieList] = useState(movies);
  const [savedList, setSavedList] = useState([]);
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */

  const KaydedilenlerListesineEkle = (movie) => {
    const listedekiFilm = savedList.find((m) => m.id === movie.id);

    if (!listedekiFilm) {
      const newState = [...savedList, movie];
      setSavedList(newState);
    }

    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedList} />
      {/* 
      Görev 3: 2 adet route tanımlayın.
      1. route '/' olacak ve FilmListesi component'ini yükleyecek ve buraya film listesini prop olarak yollayacak.
      2. route '/filmler/' parametresinden sonra 'id' parametresini alacak  (örnek: '/filmler/2', '/filmler/3' id dinamik olacak). Bu route 'Film' bileşenini yükleyecek.
      */}
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={movieList} />
        </Route>
        <Route path="/filmler/:id">
          <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
