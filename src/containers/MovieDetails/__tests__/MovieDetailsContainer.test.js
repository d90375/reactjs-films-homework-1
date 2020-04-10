import { mapStateToProps } from '../MovieDetailsContainer';

describe('mapStateToProps work correctly', () => {
  it('should show correct value', () => {
    const initialState = {
      details: {
        details: [{ id: 123 }],
        isLoading: false,
        error: null,
      },
    };

    expect(mapStateToProps(initialState).error).toEqual(null);
    expect(mapStateToProps(initialState).isLoading).toEqual(false);
    expect(mapStateToProps(initialState).details).toEqual([{ id: 123 }]);
  });
});
