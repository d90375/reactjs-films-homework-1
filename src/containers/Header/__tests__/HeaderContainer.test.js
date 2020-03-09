import { mapStateToProps } from '../HeaderContainer';

describe('mapStateToProps work correctly', () => {
  it('should show correct value', () => {
    const initialState = {
      movies: {
        condition: 'Trending',
      },
    };

    expect(mapStateToProps(initialState).condition).toEqual('Trending');
  });
});
