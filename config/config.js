const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    secret: crypto,
    ////deployment
    //url : 'mongodb://happierday:wu134679@ds135444.mlab.com:35444/happierday',
    //development
    url : 'mongodb://localhost:27017/happierday-test',
    email: 'jianchengw26@gmail.com'
}
