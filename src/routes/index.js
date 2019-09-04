import Dashboard from '../components/Dashboard'
import Developers from '../components/Developers'
import Container from '../components/Container'

export const routes = [
    {
        path: '/',
        component: Container
    },
    {
        path: '/developers',
        component: Developers
    }, {
        path: '/dashboard',
        component: Dashboard
    }
]
