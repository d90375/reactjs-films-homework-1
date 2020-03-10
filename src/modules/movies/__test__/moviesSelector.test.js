import {
  getMovies,
  getMoviesIsLoading,
  getMoviesError,
  getMoviesCondition,
  getGenres,
} from '../moviesSelector';

describe('selectors work right', () => {
  const mockState = {
    movies: {
      query: 'sonic',
      condition: 'Trending',
      movies: [{ id: 12 }, { id: 123 }],
      isLoading: false,
      error: null,
      genres: ['action', 'crime'],
    },
  };

  it('getMovies', () => {
    expect(getMovies(mockState)).toEqual([{ id: 12 }, { id: 123 }]);
  });

  it('getMoviesIsLoading', () => {
    expect(getMoviesIsLoading(mockState)).toEqual(false);
  });

  it('getMoviesError', () => {
    expect(getMoviesError(mockState)).toEqual(null);
  });

  it('getMoviesCondition', () => {
    expect(getMoviesCondition(mockState)).toEqual('Trending');
  });

  it('getGenres', () => {
    expect(getGenres(mockState)).toEqual(['action', 'crime']);
  });
});
