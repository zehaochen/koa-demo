var router = require('koa-router')();
var user = require('../models/user');
var db = require('../config/db');
var crypto = require('crypto');

/***登录页面
 *
 */
router.get('/', async (ctx, next) =>{
    ctx.state = {
        title: 'koa2 Demo'
    };

    await ctx.render('index', {
    });
});
/***去登陆接口
 *
 */
router.post('/toLogin',async(ctx, next)=>{
    var info='';
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    //md5加密
    var md5 = crypto.createHash('md5');
    md5.update(ctx.request.body.password);
    var d = md5.digest('hex');
    console.log(d+"1111111");
    var tt = "";
    //try{
         info=await user.findOne({
            where:{
                nickname: ctx.request.body.userName,
                password: d.toLocaleUpperCase()
            }
        }).then(function(result){
             tt = result;
            console.log(result + "66666");
        });
    console.log(tt + "889900");
    if(tt == null){

        ctx.body ="11";
    }else{
        ctx.body =info;
    }
    //}catch (e){
    //    console.log(e);
    //}
    //


});
module.exports = router;
