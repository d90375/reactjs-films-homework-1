import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { create } from 'react-test-renderer';
import { MovieDetails } from '../MovieDetails';

describe('MovieDetails tests', () => {
  describe('MovieDetails render', () => {
    it('MovieDetails renders correctly', () => {
      const mockCallBack = jest.fn();
      const details = {
        id: 123, background: 'backgroundUrl', rating: 6, overview: 'overview',
      };
      const location = { pathname: '/details/245891' };

      const tree = create(
        <MovieDetails
          error={null}
          isLoading={false}
          details={details}
          fetchTrailer={mockCallBack}
          fetchDetails={mockCallBack}
          deleteSearchQuery={mockCallBack}
          location={location}

        />,
      );

      expect(tree).toMatchSnapshot();
    });

    it('MovieDetails renders correctly when details is loading', () => {
      const mockCallBack = jest.fn();
      const location = { pathname: '/details/245891' };

      const tree = create(
        <MovieDetails
          error={null}
          isLoading
          details={null}
          fetchTrailer={mockCallBack}
          fetchDetails={mockCallBack}
          deleteSearchQuery={mockCallBack}
          location={location}
        />,
      );

      expect(tree).toMatchSnapshot();
    });

    it('MovieDetails renders correctly with error message', () => {
      const mockCallBack = jest.fn();
      const error = { message: 'error' };
      const location = { pathname: '/details/245891' };

      const tree = create(
        <MovieDetails
          error={error}
          isLoading={false}
          isModalOpened={false}
          details={null}
          fetchTrailer={mockCallBack}
          fetchDetails={mockCallBack}
          deleteSearchQuery={mockCallBack}
          location={location}
        />,
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('ComponentDidUpdate', () => {
    const mockCallBack = jest.fn();

    const mockProps = {
      details: {
        id: 123, background: 'backgroundUrl', rating: 6, overview: 'overview',
      },
      error: null,
      isLoading: false,
      fetchTrailer: mockCallBack,
      fetchDetails: mockCallBack,
      deleteSearchQuery: mockCallBack,
    };

    let node = null;

    beforeEach(() => {
      node = document.createElement('div');
      document.body.appendChild(node);
    });

    afterEach(() => {
      unmountComponentAtNode(node);
      node.remove();
      node = null;
    });


    it('fetchByFilter functions not called', () => {
      const location = { pathname: '/details/245891' };

      render(
        <MovieDetails
          location={location}
          {...mockProps}
        />,
        node,
      );

      render(
        <MovieDetails
          location={location}
          {...mockProps}
        />,
        node,
      );

      expect(mockCallBack.mock.calls.length).toEqual(2);
    });

    it('fetchByFilter functions called', () => {
      const location1 = { pathname: '/details/245891' };
      const location2 = { pathname: '/details/555891' };

      render(
        <MovieDetails
          location={location1}
          {...mockProps}
        />,
        node,
      );

      render(
        <MovieDetails
          location={location2}
          {...mockProps}
        />,
        node,
      );

      expect(mockCallBack.mock.calls.length).toEqual(3);
    });
  });
});
