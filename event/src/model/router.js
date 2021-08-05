import User from '../components/User'
import UserAdd from '../components/User/UserAdd'
import UserList from '../components/User/UserList'
import UserEdit from '../components/User/UserEdit'
import Shop from '../components/Shop';
import HomeUser from '../components/HomeUser'

const routes = [
    {
        path: "/",
        component: HomeUser,
        exact: true
    },
    {
        path: "/shop",
        component: Shop
    },
    {
        path: "/user",
        component: User,
        routes: [ // 嵌套路由
            {
                path: "/user/",
                component: UserList
            },
            {
                path: "/user/add",
                component: UserAdd
            },
            {
                path: "/user/edit",
                component: UserEdit
            }
        ]
    }
];

export default routes;