// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/assets/styles/index.scss')]
    });
} 

module.exports = {
  siteName: 'ELSELAB',
  siteDescription: 'Select Works for Yakima Design and Development shop ELSELAB',

  templates: {
    Post: '/lab/entries/:title',
    Tag: '/tag/:id',
    Work: '/works/:title',
    Category: '/category/:id',
    DerGood: '/goods/:title',
    GoodType: '/goods/:id',
  },

  plugins: [
    {
      // Here are the available files - path specific
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        route: '/lab/entries/:title',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs', {
              showLineNumbers: true,
            }
          ]
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create works from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Work',
        path: 'content/works/*.md',
        route: '/works/:title',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          categories: {
            typeName: 'Category',
            create: true
          }
        }
      }
    },
    {
      // Create goods from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DerGood',
        path: 'content/goods/*.md',
        route: '/goods/:title',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          dasgood: {
            typeName: 'GoodType',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    // All files transformed with this
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    }
  },
};