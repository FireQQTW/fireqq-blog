// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import markdownRemark from '../../../../jest/__fixtures__/markdown-remark';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test',
      body: markdownRemark.mdx.body
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
