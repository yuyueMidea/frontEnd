const { Sequelize, DataTypes } = require('sequelize');
// const Sequelize = require('sequelize');
const Model = Sequelize.Model;
/**
 * 配置数据库
 * 第一个参数 boblog    数据库名字
 * 第二个参数 root      数据库名字
 * 第三个参数 password  数据库密码
 */
const sequelize = new Sequelize('spiders', 'root', '920811', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    underscored:true,
    timezone: '+08:00' //东八时区
});

//验证是否连接成功
sequelize.authenticate().then(() => {
        console.log('Success.');
}).catch(err => {
        console.error('Failed', err);
});

/*class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });*/

/*sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });*/

/*User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});*/

sequelize.query('SELECT * FROM `j_position`').spread(function(res,metadata){
    console.log(res)
    console.log('=================')
    console.log(metadata)
})