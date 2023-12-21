export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'roulesscoring',
            getComponent(nextState, cb){
                System.import('./components/RoulesScoring').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formroulesscoring',
            getComponent(nextState, cb){
                System.import('./components/FormRoulesScoring').then((m)=> {
                    cb(null, m.default)
                })
            },

        }
    ]


};