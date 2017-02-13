const db = require('../config/db');
const Sequelize = require('sequelize');

var FeedBack = db.define('ph_user_feedback_info', {
    id:{
        type: Sequelize.BIGINT(19),
        primaryKey: true

    },
    third_id:Sequelize.STRING,
    apply_no:Sequelize.STRING,
    description:Sequelize.TEXT,
    page_source:Sequelize.STRING,
    create_time:Sequelize.DATE,
    update_time:Sequelize.DATE
}, {
    freezeTableName: true, // Model 对应的表名将与model名相同
    timestamps: false
});
module.exports = FeedBack;