const Koa = require('koa'); //导入koa,和koa1.x不同,在koa2中,我们导入的是一个class,因此大写的koa表示;
const app = new Koa();//创建一个koa对象表示web app本身;
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();//post请求通常会发送表单,或者JSON,它是作为requset的body发送的,但是node.js 提供的request对象和koa提供的request对象都不提供解析request的body的功能
const logger = require('koa-logger');
const logUtil = require('./utils/log_util');
const config = require('./config/db_config');
const controller=require('./controller');
const route=require('./routes/index');


// middlewares
app.use(convert(bodyparser));// 加入解析post请求中body的中间件
app.use(convert(json()));// 加入解析json的中间件
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));// 设置静态资源目录


//设置views的目录和所ph_user_feedback_info使用的模板
app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

//// logger
//app.use(async (ctx, next) => {//对于任何请求，app将调用该异步函数处理请求：
//  const start = new Date();
//  await next();
//  const ms = new Date() - start;
//  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//});

// logger
app.use(async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();

    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);

  } catch (error) {

    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});

router.use('',route.routes(), route.allowedMethods());
app.use(router.routes(), router.allowedMethods());


// response

app.on('error', function(err, ctx){
  console.log(err);
  logger.error('server error', err, ctx);
});


module.exports = app;