/**
 * Created by iqianjin-zhangshanshan on 16/12/30.
 */
var router = require('koa-router')();
var userFeedBack = require('../models/userFeedBackInfo');
var db = require('../config/db');

/***添加反馈信息页面
 *
 */
router.get('/feedback', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 Demo'
    };

    await ctx.render('feedback', {
    });
});
/***新增反馈信息列表
 *upsert用法:upsert(values, [options]) -> Promise.<created>
 *     创建或更新一行。如果匹配到主键或唯一约束键时会进行更新。
 *     SQLite - 做为两条查询执行 INSERT; UPDATE。这意味着，无论该行是否存在都会进行更新
 */
router.post('/toFeedBack',async(ctx,next)=>{

    // 设置Content-Type:
    ctx.response.type = 'application/json';

    let info=await userFeedBack.upsert({
        description:ctx.request.body.backText
    });
    ctx.body = info;
});
/***用户反馈信息列表页面
 *
 */
router.get('/userfeedback', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 Demo'
    };

    await ctx.render('userfeedback', {
    });
});
/***查询十条反馈信息列表
 *findAll和count两个方法的便捷形式.
 * 在返回值中，会包含以下两个属性：
 count - 整数，匹配到的总记录数
 rows - 对象数据，通过 limit 和 offset匹配的当前页数据
 */
router.get('/feedbacklist', async function (ctx, next) {
    let info=await userFeedBack.findAndCountAll({
        limit:10
    });
    ctx.body =info;
});

/***删除反馈信息列表
 *destroy用法:destroy(options) -> Promise.<Integer>
 *   执行成功后返回被删除的行数
 */
router.post('/delFeedBack',async function(ctx,next){

    ctx.response.type = 'application/json';

    let info=await userFeedBack.destroy({
        'where':{id:ctx.request.body.id}
    });
    ctx.body =info;
});
/***修改反馈信息列表
 *update用法:update(values, options) -> Promise.<Array.<affectedCount, affectedRows>>
 *     更新所匹配的多个实例。promise回调中会返回一个包含一个或两个元素的数组，第一个元素始终表示受影响的行数，第二个元素表示实际影响的行（仅Postgreoptions.returning为true时受支持）
 */
router.post('/updateFeedBack',async function(ctx,next){

    ctx.response.type = 'application/json';

    let info=await userFeedBack.update({
        'description':ctx.request.body.description
    },{
        'where':{id:ctx.request.body.id}
    });
    ctx.body =info;
});
module.exports = router;


