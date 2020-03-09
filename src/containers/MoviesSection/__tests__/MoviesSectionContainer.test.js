import { mapStateToProps } from '../MoviesSectionContainer';

describe('mapStateToProps work correctly', () => {
  it('should show correct value', () => {
    const initialState = {
      movies: {
        query: 'sonic',
        condition: 'Trending',
        movies: [{ id: 123 }],
        isLoading: false,
        error: null,
        genres: ['crime'],
      },
      trailer: {
        isModalOpened: true,
        trailer: null,
        isLoading: false,
        error: null,
      },
    };

    expect(mapStateToProps(initialState).error).toEqual(null);
    expect(mapStateToProps(initialState).isLoading).toEqual(false);
    expect(mapStateToProps(initialState).movies).toEqual([{ id: 123 }]);
    expect(mapStateToProps(initialState).condition).toEqual('Trending');
    expect(mapStateToProps(initialState).genres).toEqual(['crime']);
    expect(mapStateToProps(initialState).isModalOpened).toEqual(true);
    expect(mapStateToProps(initialState).trailer).toEqual(null);
    expect(mapStateToProps(initialState).trailerIsLoading).toEqual(false);
    expect(mapStateToProps(initialState).trailerError).toEqual(null);
  });
});
