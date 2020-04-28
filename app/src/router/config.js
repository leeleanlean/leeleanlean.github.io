/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-28 09:36:13
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-28 09:41:26
 */
const Menu = [
  {
    name: 'Home',
    url: '/home',
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'HomeIndex',
        url: '/home/index',
        meta: {
          title: '首页'
        },
      }
    ]
  },
  {
    name: 'About',
    url: '/about',
    meta: {
      title: '关于我们'
    },
    children: [
      {
        name: 'AboutIndex',
        url: '/about/index',
        meta: {
          title: '关于我们'
        },
      }
    ]
  }
]

export default Menu