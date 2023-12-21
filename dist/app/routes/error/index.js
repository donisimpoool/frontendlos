export default {
    path: '/', 
    childRoutes: [
      {
        path: 'Error',
        getComponent(nextState, cb){
          System.import('./components/NotFound').then((m)=> {
            cb(null, m.default)
          })
        }
      }
    ]
  
  
  };