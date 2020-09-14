import axios from 'axios';

const API_KEY = '7ee024acdb975965480fe92c2be7b03b';

const BASE_URL = 'https://api.themoviedb.org/3';

const baseUrl = async (endpoint) => {
  const req = await axios(`${BASE_URL}${endpoint}`);
  const json = await req.data;
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originais-cloneFlix',
        title: 'Originais do CloneFlix',
        items: await baseUrl(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'recomendados-para-voce',
        title: 'Recomendados para você',
        items: await baseUrl(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await baseUrl(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'acao',
        title: 'Ação',
        items: await baseUrl(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await baseUrl(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await baseUrl(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await baseUrl(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await baseUrl(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await baseUrl(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await baseUrl(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
