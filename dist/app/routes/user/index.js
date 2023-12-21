export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'user',
            getComponent(nextState, cb){
                System.import('./components/User').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formuser',
            getComponent(nextState, cb){
                System.import('./components/FormUser').then((m)=> {
                    cb(null, m.default)
                })
            }
        }
    ]


};