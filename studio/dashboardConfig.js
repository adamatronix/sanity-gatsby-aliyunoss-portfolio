export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62945bc06a676d5694c7a2ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-aliyunoss-portfolio-studio',
                  apiId: '5a4c28f5-1741-45b0-bb4f-6045eb6c4a63'
                },
                {
                  buildHookId: '62945bc0307cc554e32037ec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-aliyunoss-portfolio',
                  apiId: '48f681fe-800f-451e-9cf7-e23cf41434eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamatronix/sanity-gatsby-aliyunoss-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-aliyunoss-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
