import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Modal from '../Modal';

describe('Modal render', () => {
  it('Modal renders correctly', () => {
    const mockCallBack = jest.fn();
    const renderer = new ShallowRenderer();
    renderer.render(<Modal removeTrailerInfo={mockCallBack} trailerIsLoading />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('Modal renders correctly', () => {
    const mockCallBack = jest.fn();
    const renderer = new ShallowRenderer();
    renderer.render(<Modal removeTrailerInfo={mockCallBack} trailerIsLoading={false} trailerError={{ message: 'error' }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('Modal renders correctly', () => {
    const mockCallBack = jest.fn();
    const renderer = new ShallowRenderer();
    renderer.render(<Modal removeTrailerInfo={mockCallBack} trailerIsLoading={false} trailer={{ key: 'as123' }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('Modal renders correctly', () => {
    const mockCallBack = jest.fn();
    const renderer = new ShallowRenderer();
    renderer.render(<Modal removeTrailerInfo={mockCallBack} trailerIsLoading={false} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
