/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-28 09:36:13
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-07 15:49:12
 */
const Menu = [
  {
    name: 'Home',
    path: '/Home',
    meta: {
      title: '概览'
    },
    children: [
      {
        name: 'HomeIndex',
        path: '/Home/Index',
        meta: {
          title: '概览',
          icon: 'HomeOutlined'
        },
      },
      {
        name: 'HomeDashboard',
        path: '/Home/Dashboard',
        meta: {
          title: 'Dashboard'
        },
      }
    ]
  },
  {
    name: 'Tool',
    path: '/Tool',
    meta: {
      title: '工具'
    },
    children: [
      {
        name: 'ToolIndex',
        path: '/Tool/Index',
        meta: {
          title: 'Markdown'
        }
      },
    ]
  },
  {
    name: 'Case',
    path: '/Case',
    meta: {
      title: '案例作品'
    },
    children: [
      {
        name: 'CaseIndex',
        path: '/Case/Index',
        meta: {
          title: '静态页面'
        }
      },
      {
        name: 'CaseSystem',
        path: '/Case/System',
        meta: {
          title: '系统集成'
        }
      },
      {
        name: 'CaseOfficial',
        path: '/Case/Official',
        meta: {
          title: '公众号'
        }
      },
      {
        name: 'CaseMiniProgram',
        path: '/Case/MiniProgram',
        meta: {
          title: '小程序'
        }
      },
      {
        name: 'CaseHeadline',
        path: '/Case/Headline',
        meta: {
          title: '头条号'
        }
      }
    ]
  },
  {
    name: 'Python',
    path: '/Python',
    meta: {
      title: 'Python'
    },
    children: [
      {
        name: 'PythonIndex',
        path: '/Python/Index',
        meta: {
          title: '实时热搜'
        },
      },
      {
        name: 'PythonSpider',
        path: '/Python/Spider',
        meta: {
          title: '爬虫工具'
        },
      }
    ]
  },
  {
    name: 'Finance',
    path: '/Finance',
    meta: {
      title: '财经金融'
    },
    children: [
      {
        name: 'FinanceIndex',
        path: '/Finance/Index',
        meta: {
          title: 'Finance'
        },
      }
    ]
  },
  {
    name: 'About',
    path: '/About',
    meta: {
      title: '关于我们'
    },
    children: [
      {
        name: 'AboutIndex',
        path: '/About/Index',
        meta: {
          title: '关于我们'
        },
      }
    ]
  }
]

export const childrens = () => {
  let result = []
  Menu.forEach(item => {
    result = [...result, ...item.children]
  })
  return result
}

export default Menu