import { defineConfig } from "umi";

export default defineConfig({
  title: "东东印尼语",
  npmClient: 'pnpm',
  outputPath: 'bahasaGoogle',
  publicPath: "/bahasaGoogle/", // 资源访问路径，默认/
  history: { type: 'hash' },
  hash: true,  //让 build 之后的产物包含 hash 后缀, 避免浏览器加载缓存
  mock: false, //关闭 Mock 功能
  clientLoader: {}, //路由数据预加载
  theme: {
    '@primary-color': '#1DA57A'
  },
  routes: [
    { path: "/", component: "home" },
    { path: "/home", component: "home" },
    { path: "/courseList", component: "courseList", name: '课程列表' },
    { path: "/videoPlay", component: "videoPlay", name: '课程观看' },
  ],
  alias: {},
  plugins: [
    '@umijs/plugins/dist/initial-state',
    '@umijs/plugins/dist/model',
  ],
  initialState: {},
  model: {},
});
