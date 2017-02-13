const fs = require('fs');

function addMapping(router, mapping) {
    console.log('test mapping');
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router,dir) {
    console.log('test router');
    var files = fs.readdirSync(__dirname + '/routes');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/routes/' + f);
        addMapping(router, mapping);
    }
}

module.exports = function (dir) {
    let controllers_dir = dir || 'routes', // 如果不传参数，扫描目录默认为'routes'
        router = require('koa-router')();
    console.log(controllers_dir);
    addControllers(router, controllers_dir);
    return router.routes();
};