import User from '../components/User'
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
        component: User
    }
];

export default routes;