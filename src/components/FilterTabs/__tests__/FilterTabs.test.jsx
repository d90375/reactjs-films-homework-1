import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { create } from 'react-test-renderer';
import FilterTabs from '../FilterTabs';

describe('FilterTabs tests', () => {
  describe('FilterTabs render', () => {
    it('FilterTabs renders correctly when genres tab active', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];
      const tree = create(
        <Router>
          <FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="123" />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('FilterTabs renders correctly when trending tab active', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];
      const tree = create(
        <Router>
          <FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="Trending" />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('FilterTabs renders correctly when genres are null', () => {
      const mockCallBack = jest.fn();
      const genres = null;
      const tree = create(
        <Router>
          <FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="Trending" />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('onChange function', () => {
    it('onChange callback function called', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];

      const tree = create(
        <Router>
          <FilterTabs
            genres={genres}
            fetchByFilter={mockCallBack}
            condition="123"
          />
        </Router>,
      );

      const select = tree.root.findByProps({ name: 'Genre' });
      const e = {
        target: {
          value: 'crime',
        },
      };

      select.props.onChange(e);

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith('crime');
    });
  });
});
