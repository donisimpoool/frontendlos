export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
        {
            path: 'loanproduct',
            getComponent(nextState, cb){
                System.import('./components/LoanProduct').then((m)=> {
                    cb(null, m.default)
                })
            }
        },{
            path: 'formloanproduct',
            getComponent(nextState, cb){
                System.import('./components/FormLoanProduct').then((m)=> {
                    cb(null, m.default)
                })
            }
        }
    ]


};