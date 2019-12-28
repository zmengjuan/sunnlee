/*
 * @LastEditors: jingjingliu
 * @Description: *_*
 */
import login from '../components/login'
import home from '../components/home'
import accountHome from '../components/account/accountHome'
import accountLog from '../components/account/accountLog'
import sysUserInfoHome from '../components/sys/sysUserInfoHome'
import menuHome from '../components/sys/menuHome'
import ruleHome from '../components/sys/ruleHome'
import doorHome from '../components/door/doorHome'
import doorLog from '../components/door/doorLog'
import devicePsd from '../components/door/doorAccessDevicePsd'
import groupHome from '../components/door/groupHome'
import organizationHome from '../components/account/organizationHome'
import facePersonHome from '../components/face/facePersonHome'
import faceLog from '../components/face/faceLog'
import softVersion from '../components/softVersion/home'
import distHome from '../components/sys/distHome'
import districtHome from '../components/lock/districtHome'
import doorEquHome from '../components/lock/doorEquHome'
import eduCallPolice from '../components/lock/eduCallPolice'
import equCommunicationHome from '../components/lock/equCommunicationHome'
import equUnlock from '../components/lock/equUnlock'
import equUserHome from '../components/lock/equUserHome'

import equInstallerInfo from '../components/Install/installerInfo'
import equInstallOrder from '../components/Install/installOrder'
import equRepairOrder from '../components/Install/repairOrder'

import applicationManage from '../components/lock/applicationManage'
import productManage from '../components/lock/productManage'
import databaseHome from '../components/sysControl/databaseHome'

import App from '../app'
export default [{
        path: '/',
        name: 'login',
        component: login
    },
    {
        title: '登录',
        path: '/login',
        name: 'login',
        component: login
    },
    {
        // 业务界面都路由到App里作为内嵌路由
        path: '/',
        component: App,
        children: [
            // {
            //   path: '/home',
            //   meta: {
            //     title: '修改密码',
            //     isInMenu: true
            //   },
            //   component: home
            // },
            {
                path: '/home',
                meta: {
                    title: '账号管理 > 公司管理',
                    isInMenu: true
                },
                component: accountHome
            },
            {
                path: '/accountHome',
                meta: {
                    menuImg: '',
                    // icon: 'el-icon-user',
                    title: '账号管理 > 账号列表',
                    isInMenu: true
                },
                component: accountHome,
                children: [

                ]
            },
            {
                path: '/accountLog',
                meta: {
                    title: '操作日志',
                    isInMenu: true
                },
                component: accountLog
            },
            {
                path: '/doorHome',
                meta: {
                    title: '门禁管理',
                    isInMenu: true
                },
                component: doorHome
            },
            {
                path: '/doorLog',
                meta: {
                    title: '操作日志',
                    isInMenu: true
                },
                component: doorLog
            },
            {
                path: '/devicePsd',
                meta: {
                    title: '设备密码管理',
                    isInMenu: true
                },
                component: devicePsd
            },
            {
                path: '/groupHome',
                meta: {
                    title: '分组管理',
                    isInMenu: true
                },
                component: groupHome
            },
            {
                path: '/organizationHome',
                meta: {
                    title: '账号管理 > 公司管理',
                    isInMenu: true
                },
                component: organizationHome
            },
            {
                path: '/facePersonHome',
                meta: {
                    title: '人脸库',
                    isInMenu: true
                },
                component: facePersonHome
            },
            {
                path: '/faceLog',
                meta: {
                    title: '操作日志',
                    isInMenu: true
                },
                component: faceLog
            },
            {
                path: '/sysUserInfoHome',
                meta: {
                    title: '系统管理 > 管理员管理',
                    isInMenu: true
                },
                component: sysUserInfoHome
            },
            {
                path: '/menuHome',
                meta: {
                    title: '系统管理 > 菜单管理',
                    isInMenu: true
                },
                component: menuHome
            },
            {
                path: '/ruleHome',
                meta: {
                    title: '系统管理 > 角色管理',
                    isInMenu: true
                },
                component: ruleHome
            },
            {
                path: '/softVersion',
                meta: {
                    title: '系统管理 > 软件版本管理',
                    isInMenu: true
                },
                component: softVersion
            },
            {
                path: '/distHome',
                meta: {
                    title: '字典管理',
                    isInMenu: true
                },
                component: distHome
            },
            {
                path: '/doorEquHome',
                meta: {
                    title: '门锁管理 > 设备管理',
                    isInMenu: true
                },
                component: doorEquHome
            },
            {
                path: '/equUserHome',
                meta: {
                    title: '门锁管理 > 设备用户管理',
                    isInMenu: true
                },
                component: equUserHome
            },
            {
                path: '/districtHome',
                meta: {
                    title: '门锁管理 > 区域管理',
                    isInMenu: true
                },
                component: districtHome
            },
            {
                path: '/applicationManage',
                meta: {
                    title: '门锁管理 > 应用管理',
                    isInMenu: true
                },
                component: applicationManage
            },
            {
                path: '/productManage',
                meta: {
                    title: '门锁管理 > 产品管理',
                    isInMenu: true
                },
                component: productManage
            },
            {
                path: '/equUnlock',
                meta: {
                    title: '门锁管理 > 设备开锁日志',
                    isInMenu: true
                },
                component: equUnlock
            },
            {
                path: '/eduCallPolice',
                meta: {
                    title: '门锁管理 > 设备报警日志',
                    isInMenu: true
                },
                component: eduCallPolice
            },
            {
                path: '/equInstallerInfo',
                meta: {
                    title: '安装工管理',
                    isInMenu: true
                },
                component: equInstallerInfo
            },
            {
                path: '/equInstallOrder',
                meta: {
                    title: '安装工单管理',
                    isInMenu: true
                },
                component: equInstallOrder
            },
            {
                path: '/equRepairOrder',
                meta: {
                    title: '维修工单管理',
                    isInMenu: true
                },
                component: equRepairOrder
            },
            {
                path: '/equCommunicationHome',
                meta: {
                    title: '门锁管理 > 设备通讯',
                    isInMenu: true
                },
                component: equCommunicationHome
            },
            {
                path: '/databaseHome',
                meta: {
                    title: '系统监控 > 数据库监控',
                    isInMenu: true
                },
                component: databaseHome
            }
        ]
    }
]

// export default routes