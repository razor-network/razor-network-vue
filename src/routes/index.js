import Dashboard from '../components/Dashboard'
import Developers from '../components/Developers'
import Home from '../components/Home'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/developers',
        component: Developers
    }, {
        path: '/dashboard',
        component: Dashboard
    }
]
