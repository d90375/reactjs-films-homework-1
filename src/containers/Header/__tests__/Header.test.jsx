import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import Header from '../Header';

describe('Header tests', () => {
  describe('Header render', () => {
    it('Header renders correctly', () => {
      const mockCallback = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<Header
        setMoviesCondition={mockCallback}
        fetchMovies={mockCallback}
        condition="Trending"
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('getSearch function', () => {
    it('getSearch function called with query', () => {
      jest.useFakeTimers();

      const mockSetMoviesCondition = jest.fn();
      const mockFetchMovies = jest.fn();

      const tree = create(
        <Router>
          <Header
            setMoviesCondition={mockSetMoviesCondition}
            fetchMovies={mockFetchMovies}
            condition="Trending"
          />
        </Router>,
      );

      const searchPanel = tree.root.findByProps({ name: 'Search' });

      const e = {
        target: {
          value: 'sonic',
        },
      };

      searchPanel.props.getSearch(e);

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(0);

      jest.runAllTimers();

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
    });

    it('getSearch function called without query', () => {
      jest.useFakeTimers();

      const mockSetMoviesCondition = jest.fn();
      const mockFetchMovies = jest.fn();

      const tree = create(
        <Router>
          <Header
            setMoviesCondition={mockSetMoviesCondition}
            fetchMovies={mockFetchMovies}
            condition="Trending"
          />
        </Router>,
      );

      const searchPanel = tree.root.findByProps({ name: 'Search' });

      const e = {
        target: {
          value: '',
        },
      };

      searchPanel.props.getSearch(e);

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(0);

      jest.runAllTimers();

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);

      e.target.value = 'sonic';
      searchPanel.props.getSearch(e);

      jest.runAllTimers();

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(2);
    });
  });
});
