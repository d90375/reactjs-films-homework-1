import imageNotFound from '../assets/images/notFound.png';

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

    handleResult = (res, genres) => {
      const { results } = res;
      const amount = 16;
      if (results.length > amount) {
        results.length = amount;
      }
      return results.map((movie) => this.transformMovieData(movie, genres));
    }

    getTrending = async (genres) => {
      const res = await this.getResource(`movie/popular?api_key=${this.apiKey}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getComingSoon = async (genres) => {
      const res = await this.getResource(`movie/upcoming?api_key=${this.apiKey}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getTopRated = async (genres) => {
      const res = await this.getResource(`movie/top_rated?api_key=${this.apiKey}&${this.lang}&page=1`);
      return this.handleResult(res, genres);
    }

    getByGenre = async (genre, genres) => {
      const res = await this.getResource(`discover/movie?api_key=${this.apiKey}&${this.lang}&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`);
      return this.handleResult(res, genres);
    }

    getSearch = async (genres, query) => {
      const res = await this.getResource(`search/movie?api_key=${this.apiKey}&${this.lang}&query=${query}&page=1&include_adult=false`);
      return this.handleResult(res, genres);
    }

    getTrailer = async (id) => {
      const res = await this.getResource(`movie/${id}/videos?api_key=${this.apiKey}&${this.lang}`);
      const { results } = res;
      return results[0];
    }

    getDetails = async (id) => {
      const res = await this.getResource(`movie/${id}?api_key=${this.apiKey}&${this.lang}`);
      return this.transformDetailsData(res);
    }

    transformMovieData = (movie, genres) => ({
      id: movie.id,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : imageNotFound,
      background: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : imageNotFound,
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      genres: movie.genre_ids.reduce((acc, id) => `${acc}${genres[id]}, `, '').slice(0, -2),
      viewInfo: false,
    });

    transformDetailsData = (details) => ({
      background: details.backdrop_path ? `https://image.tmdb.org/t/p/w1280${details.backdrop_path}` : imageNotFound,
      title: details.title,
      rating: details.vote_average,
      overview: details.overview,
      genres: details.genres.reduce((acc, genre) => `${acc}${genre.name}, `, '').slice(0, -2),
      duration: `${Math.round(details.runtime / 60)}h ${details.runtime % 60}m`,
    });
}
