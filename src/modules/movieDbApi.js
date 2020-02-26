import imageNotFound from '../assets/images/not-found.png';

export default class MovieDbApi {
    apiBase = 'https://api.themoviedb.org/3/';

    apiKey = 'a6a65694a66cff82788a6d4a1c9caa1e';

    lang = 'language=en-US';

    getResource = async (url) => {
      const res = await fetch(`${this.apiBase}${url}`);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}`
          + `, received ${res.status}`);
      }

      const json = await res.json();
      return json;
    };

    getGenres = async () => {
      const res = await this.getResource(`genre/movie/list?api_key=${this.apiKey}&${this.lang}`);
      const { genres } = res;
      return genres.reduce((acc, genre) => {
        const arr = acc;
        const { id, name } = genre;
        arr[id] = name;
        return arr;
      }, []);
    }

    getTrending = async (genres) => {
      const res = await this.getResource(`movie/popular?api_key=${this.apiKey}&${this.lang}&page=1`);
      const { results } = res;
      const amount = 16;
      results.length = amount;
      return results.map((movie) => this.transMovieData(movie, genres));
    }

    getSearch = async (genres, query) => {
      const res = await this.getResource(`search/movie?api_key=${this.apiKey}&${this.lang}&query=${query}&page=1&include_adult=false`);
      const { results } = res;
      const amount = 16;
      if (results.length > amount) {
        results.length = amount;
      }

      return results.map((movie) => this.transMovieData(movie, genres));
    }

    getMovie = async (id) => {
      const res = await this.getResource(`movie/${id}/videos?api_key=${this.apiKey}&${this.lang}`);
      const { results } = res;
      return results[0];
    }

    transMovieData = (movie, genres) => ({
      id: movie.id,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : imageNotFound,
      background: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : imageNotFound,
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      genres: movie.genre_ids.reduce((acc, id) => `${acc}${genres[id]}, `, '').slice(0, -2),
      viewInfo: false,
    });
}
