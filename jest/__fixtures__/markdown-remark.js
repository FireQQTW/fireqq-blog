'use strict';
const React = require('react');

module.exports = {
  mdx: {
    id: 'test-123',
    body: `return () => React.createElement('div', null, 'test')`,
    fields: {
      tagSlugs: [
        '/test_0',
        '/test_1'
      ]
    },
    frontmatter: {
      date: '2016-09-01',
      description: 'test',
      title: 'test',
      tags: [
        'test_0',
        'test_1'
      ]
    }
  }
};
