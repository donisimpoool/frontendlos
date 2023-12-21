export default {
    path: '/',
    component: require('../../components/common/Layout').default,
    childRoutes: [
      {
        path: 'approval-process',
        getComponent(nextState, cb){
          System.import('./components/ApprovalPage').then((m)=> {
            cb(null, m.default)
          })
        }
      }
    ]
  
  
  };