'use strict';

module.exports = {
  markdownRemark: {
    id: 'test-123',
    body: "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"title\": \"JS 基礎型別\",\n  \"date\": \"2021-04-10T00:00:00.000Z\",\n  \"template\": \"post\",\n  \"draft\": false,\n  \"slug\": \"javascript-default-types\",\n  \"category\": \"F2E\",\n  \"tags\": [\"javascript\"],\n  \"description\": \"JS 基礎型別\",\n  \"socialImage\": \"\"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }));\n}\n;\nMDXContent.isMDXComponent = true;",
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
