module.exports = {
    title: '学习笔记',
	base: '/learn_book/',
    description: '记录个人的学习笔记',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        repo: 'learn/book',
        repoLabel: '查看源码',
        lastUpdated: '上次更新:',
        smoothScroll: true,
        algolia: {
            applicationID: '8FPRMMKIX1',
            apiKey: 'fd5b150f8d173cc4651d7e6f0c233c46',
            adminApiKey: '25fa6207deecbaaad32aacca9e631fca',
            indexName: 'truebt',
            chunkSize: 5000
        },
        sidebarDepth: 2,
        nav: [{
                text: '前端',
                items: [{
                        text: 'HTML',
                        link: '/guide/front/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/guide/front/css/'
                    },
                    {
                        text: 'JS',
                        link: '/guide/front/js/'
                    },
                ]
            },
            {
                text: 'Java',
                items: [{
                        text: 'Java基础',
                        link: '/guide/back/java/base'
                    },
                    {
                        text: 'Java',
                        link: '/guide/back/java/base'
                    },
                ]
            },
            {
                text: 'Go',
                items: [{
                        text: 'Go基础',
                        link: '/guide/back/go/base'
                    },
                    {
                        text: 'Java',
                        link: '/guide/back/go/base'
                    },
                ]
            },
            {
                text: 'Python',
                items: [{
                    text: 'Python基础',
                    link: '/guide/back/python/base'
                }]
            },
            {
                text: 'Linux',
                items: [{
                    text: 'Linux基础',
                    link: '/guide/devops/linux/base/'
                }]
            },
        ],
        sidebar: {
            '/guide/devops/linux/base/': [
                '',
                '001_行业介绍',
                '002_Linux简介',
                '003_Linux安装',
                '004_Linux服务器管理建议'
            ]



        }
    }
}