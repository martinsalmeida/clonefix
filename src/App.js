import React, { useEffect, useState } from 'react';
import './App.css';

import api from '../src/Api/api';
import MovieRow from './components/MovieRow';
import FeatureMovie from './components/FetureMovie';
import Header from './components/Header';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureDate] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      //escolhendo o filme em destaque
      let originais = list.filter((i) => i.slug === 'originais-cloneFlix');
      let randomChosen = Math.floor(
        Math.random() * (originais[0].items.results.length - 1)
      );
      let chosen = originais[0].items.results[randomChosen];

      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

      setFeatureDate(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scroolListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scroolListener);

    return () => {
      window.addEventListener('scroll', scroolListener);
    };
  }, []);

  return (
    <div className='page'>
      <Header black={blackHeader} />
      {featureData && <FeatureMovie item={featureData} />}
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com{' '}
        <span role='img' aria-label='coração'>
          🧡
        </span>{' '}
        por Daniel Augusto
        <p>Direitos de Imagem para Netflix</p>
        <p>Dados do site themoviedb.org</p>
      </footer>

      {movieList.length <= 0 && (
        <div className='loading'>
          <img
            src='https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_840,c_limit/Netflix_LoadTime.gif'
            alt='carregando'
          />
        </div>
      )}
    </div>
  );
}

export default App;
