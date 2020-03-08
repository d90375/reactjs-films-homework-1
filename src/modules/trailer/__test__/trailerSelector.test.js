import {
  getTrailer,
  getTrailerIsLoading,
  getTrailerError,
  getModalOpened,
} from '../trailerSelector';

describe('selectors work right', () => {
  const mockState = {
    trailer: {
      isModalOpened: true,
      trailer: null,
      isLoading: false,
      error: null,
    },
  };

  it('getTrailer', () => {
    expect(getTrailer(mockState)).toEqual(null);
  });

  it('getTrailerIsLoading', () => {
    expect(getTrailerIsLoading(mockState)).toEqual(false);
  });

  it('getTrailerError', () => {
    expect(getTrailerError(mockState)).toEqual(null);
  });

  it('getModalOpened', () => {
    expect(getModalOpened(mockState)).toEqual(true);
  });
});
