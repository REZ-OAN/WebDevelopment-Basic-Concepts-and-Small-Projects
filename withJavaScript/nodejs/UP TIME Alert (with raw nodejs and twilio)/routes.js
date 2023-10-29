/**
 * Title : Routes
 * Description : Application Routes
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/09/23
 */
// dependencies
const handlers = require('./routeHandlers/handlers');

// define scaffolding
const routes = {
    /**
     * 'sample' : function
     */
    sample: handlers.sampleHandler,
    user: handlers.userHandler,
    token: handlers.tokenHandler,
    check: handlers.checkHandler,
};

module.exports = routes;
