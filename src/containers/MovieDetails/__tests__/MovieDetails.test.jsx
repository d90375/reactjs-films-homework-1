import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create } from 'react-test-renderer';
import MovieDetails from '../MovieDetails';

describe('MovieDetails tests', () => {
  describe('MovieDetails render', () => {
    it('MovieDetails renders correctly', () => {
      const mockCallBack = jest.fn();
      const details = { id: 123 };

      const tree = create(
        <Router>
          <MovieDetails
            error={null}
            isLoading={false}
            details={details}
            fetchTrailer={mockCallBack}
            fetchDetails={mockCallBack}
          />
        </Router>,
      );

      expect(tree).toMatchSnapshot();
    });

    it('MovieDetails renders correctly when details is loading', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <Router>
          <MovieDetails
            error={null}
            isLoading
            details={null}
            fetchTrailer={mockCallBack}
            fetchDetails={mockCallBack}
          />
        </Router>,
      );

      expect(tree).toMatchSnapshot();
    });

    it('MovieDetails renders correctly with error message', () => {
      const mockCallBack = jest.fn();
      const error = { message: 'error' };

      const tree = create(
        <Router>
          <MovieDetails
            error={error}
            isLoading={false}
            isModalOpened={false}
            details={null}
            fetchTrailer={mockCallBack}
            fetchDetails={mockCallBack}
          />
        </Router>,
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
