/**
 * Created by iqianjin-zhangshanshan on 16/12/30.
 */
const db = require('../config/db');
const Sequelize = require('sequelize');

var user = db.define('user', {
    id:{
        type: Sequelize.BIGINT(19),
        primaryKey: true

    },
    user_no:Sequelize.STRING,
    kn_userid:Sequelize.STRING,
    is_new_knid:Sequelize.INTEGER,
    old_kn_userid:Sequelize.STRING,
    nickname:Sequelize.STRING,
    password:Sequelize.STRING,
    cash_password:Sequelize.STRING,
    mobile:Sequelize.STRING,
    reg_email:Sequelize.STRING,
    mobile_verified:Sequelize.BOOLEAN,
    real_name:Sequelize.STRING,
    id_no:Sequelize.STRING,
    id_verified:Sequelize.BOOLEAN,
    email:Sequelize.STRING,
    email_verified:Sequelize.BOOLEAN,
    taobao:Sequelize.STRING,
    taobao_verified:Sequelize.BOOLEAN,
    qq:Sequelize.STRING,
    credit_card_no:Sequelize.STRING,
    bank_card_no:Sequelize.STRING,
    bank_card_id:Sequelize.STRING,
    bank_card_name:Sequelize.STRING,
    bank_card_sub:Sequelize.STRING,
    credit_score:Sequelize.DOUBLE,
    head_image:Sequelize.STRING,
    login_permission:Sequelize.INTEGER,
    loan_permission:Sequelize.INTEGER,
    client_type:Sequelize.BOOLEAN,
    utm_source:Sequelize.BOOLEAN,
    region:Sequelize.STRING,
    old_user:Sequelize.INTEGER,
    version:Sequelize.INTEGER,
    last_login_time:Sequelize.DATE,
    create_time:Sequelize.DATE,
    update_time:Sequelize.DATE,
    phone:Sequelize.STRING,
    default_deduct:Sequelize.INTEGER,
    core_customer_id:Sequelize.BIGINT,
    gender:Sequelize.BOOLEAN,
    third_id:Sequelize.STRING,
    product_source:Sequelize.INTEGER
}, {
    freezeTableName: true, // Model 对应的表名将与model名相同
    timestamps: false
});
module.exports = user;