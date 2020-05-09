export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb6a2d18f7aa3b592db9c05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vaki366k',
                  apiId: 'bf924c00-f05f-4144-b6c9-96d819472dfa'
                },
                {
                  buildHookId: '5eb6a2d1588ceaf191bfb8b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-139gj2sx',
                  apiId: 'e5e78028-1904-4b88-9a1e-8bd7cd5998d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sreekanthedayar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-139gj2sx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
