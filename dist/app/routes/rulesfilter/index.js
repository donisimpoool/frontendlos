export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'rulesfilter',
            getComponent(nextState, cb){
                System.import('./components/RulesFilter').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formrulesfilter',
            getComponent(nextState, cb){
                System.import('./components/FormRulesFilter').then((m)=> {
                    cb(null, m.default)
                })
            },

        }
    ]


};