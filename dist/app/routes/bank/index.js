export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'bank',
            getComponent(nextState, cb){
                System.import('./components/Bank').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formbank',
            getComponent(nextState, cb){
                System.import('./components/FormBank').then((m)=> {
                    cb(null, m.default)
                })
            }
        }
    ]


};