var router = require('koa-router')();

const login = require('./login');
const feedback = require('./feedback');

router.use('', login.routes(), login.allowedMethods());
router.use('', feedback.routes(), feedback.allowedMethods());


module.exports = router;
