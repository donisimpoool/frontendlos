export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'syncdata',
            getComponent(nextState, cb){
                System.import('./components/SyncData').then((m)=> {
                    cb(null, m.default)
                })
            }
        }
    ]


};