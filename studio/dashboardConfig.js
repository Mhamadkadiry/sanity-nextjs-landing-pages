export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6229d831e42c577ea6719010',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nmvap22m',
                  apiId: 'e328ebf1-44c1-4a1b-b79e-ba75315f1131'
                },
                {
                  buildHookId: '6229d83157d76304d3068fae',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rdc43fks',
                  apiId: '65159d5b-0964-4f7d-a150-4117654beb3a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mhamadkadiry/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rdc43fks.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
