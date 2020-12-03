import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'qiankun',
    layout: 'side',
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
          props: {
            autoSetLoading: true,
            className: 'myContainer',
            wrapperClassName: 'myWrapper',
          }
        },
        // {
        //   name: 'app2', // 唯一 id
        //   entry: '//localhost:8002', // html entry
        // },
      ],
    },
  },
  routes: [
    { path: '/', component: '@/pages/index' ,
      menu: {
        name: '欢迎', // 兼容此写法
        icon: 'smile',
      }
    },
    { path: '/user', component: '@/pages/user' ,
      menu: {
        name: '用户', // 兼容此写法
        icon: 'user',
      }
    },
    // 配置 app1 关联的路由
    {
      path: '/app1',
      microApp: 'app1',
      menu: {
        name: 'app1', // 兼容此写法
        icon: 'user',
      }
    }
  ],
});
