/**
 * @Author: Guoxing.han 
 * @Date: 2018-04-18 11:16:14 
 * @version 0.0.1 
 */
var index = require('./../controllers/index')
module.exports = (app) => {
  app.get('/', index.index);
  app.get('/api/get', index.get);
}