import Vue from 'vue';
import Router from 'vue-router';

import index from '@/components/Index';
Vue.use(Router);

// const login = () => import(/* webpackChunkName: "index" */ '@/components/Index');
// const Home = { template: '<div>This is Home</div>' }
export default new Router({
    mode:'history',
    routes: [
        {
            path: '/home',
            name: 'jia',
            component: index,
        },
    //     {
    //         path: '/manage',
    //         component: manage,
    //         children: [
    //             {
    //                 path: '/home',
    //                 component: home,
    //                 meta: []
    //             },
    //             {
    //                 path: '/companyOverview',
    //                 component: companyOverview,
    //                 meta: ['企业信息', '企业综合信息']
    //             },
    //             {
    //                 path: '/dataSync',
    //                 component: dataSync,
    //                 meta: ['表数据管理', '数据同步']
    //             },
    //             {
    //                 path: '/dataLog',
    //                 component: dataLog,
    //                 meta: ['表数据管理', '数据更新记录']
    //             },
    //             {
    //                 path: '/platform',
    //                 component: platform,
    //                 meta: ['用户信息', '平台机构']
    //             },
    //             {
    //                 path: '/userManage',
    //                 component: userManage,
    //                 meta: ['用户信息', '用户管理']
    //             },
    //             {
    //                 path: '/moduleManage',
    //                 component: moduleManage,
    //                 meta: ['权限信息', '功能管理']
    //             },
    //             {
    //                 path: '/roleManage',
    //                 component: roleManage,
    //                 meta: ['权限信息', '角色管理']
    //             },
    //             {
    //                 path: '/sysParam',
    //                 component: sysParam,
    //                 meta: ['系统配置', '系统参数']
    //             },
    //             {
    //                 path: '/resManage',
    //                 component: resManage,
    //                 meta: ['系统配置', '资源管理']
    //             },
    //             {
    //                 path: '/sysMonitor',
    //                 component: sysMonitor,
    //                 meta: ['系统配置', '系统监测']
    //             }
    //         ]
    //     },
    //
    ]
})

