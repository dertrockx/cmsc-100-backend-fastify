const { todo } = require('./todo');
/*
* initilize all the routes
* @param (*) app
*/

exports.routes = (app) => {
  // access root address -> http://localhost:<port>/
  app.get('/', {
    /*
    *
    * @param (*) req - this is the request parameter that is sent by the client
    * 
    */
    handler: async (req) => {
      console.log(req);
      // response in JSON format
      return { success: true }
    }
  })
  todo(app);
}