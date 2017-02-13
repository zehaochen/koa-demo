/**
 * Created by iqianjin-zhangshanshan on 16/12/28.
 */
const Sequelize = require('sequelize');
const config = require('./db_config');

var db = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports = db;