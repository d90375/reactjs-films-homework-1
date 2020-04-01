import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import FilterTab from '../FilterTab';

describe('FilterTab tests', () => {
  describe('FilterTab render', () => {
    it('FilterTab renders correctly', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<FilterTab fetchByFilter={mockCallBack} filter="Trending" condition="Trending">Trending</FilterTab>);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('FilterTab renders correctly when genres tab active', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<FilterTab fetchByFilter={mockCallBack} filter="Trending" condition="123">Trending</FilterTab>);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('onClick function', () => {
    it('onClick callback function called', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <FilterTab
          filter="Trending"
          condition="Trending"
          historyPush={mockCallBack}
        >
          Trending
        </FilterTab>
        ,
      );

      const button = tree.root.findByProps({ type: 'button' });
      const e = {
        target: {
          dataset: {
            filter: 'Trending',
          },
        },
      };

      button.props.onClick(e);

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith('/?filter=Trending');
    });
  });
});
