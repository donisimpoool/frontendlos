export default {
  path: '/',
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'application',
      getComponent(nextState, cb){
        System.import('./components/ListApplication').then((m)=> {
          cb(null, m.default)
        })
      }
      
    },
    {
      path: 'new-app',
      getComponent(nextState, cb){
        System.import('./components/NewApplication').then((m)=> {
          cb(null, m.default)
        })
      },
      
    },
    {
      path: 'edit-app/:id',
      getComponent(nextState, cb){
        System.import('./components/NewApplication').then((m)=> {
          cb(null, m.default)
        })
      },
      
    }
  ]


};