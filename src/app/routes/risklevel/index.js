export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'risklevel',
            getComponent(nextState, cb){
                System.import('./components/RiskLevel').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formrisklevel',
            getComponent(nextState, cb){
                System.import('./components/FormRiskLevel').then((m)=> {
                    cb(null, m.default)
                })
            }
        }
    ]


};