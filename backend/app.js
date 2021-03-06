//无法使用 import X from Y 的ES6语法，原生Node不支持;
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const low = require('lowdb');
const storage = require('lowdb/file-async');
const crypto = require('crypto');
//创建一个Express服务器
const server = jsonServer.create();
//使用json-server 默认选择的中间件(logger、static、cors和no-cache)
server.use(jsonServer.defaults());
//使用 body-parser 中间件
server.use(bodyParser.json());

const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';
//创建一个lowdb实例
const db = low(dbfile, { storage });

var md5 = function(str) {
    return crypto
        .createHash('md5')
        .update(str.toString())
        .digest('hex');
};


//添加新问卷
server.post('/questionnaire/add', (req, res) => {
    const item = req.body;
    item.id = uuid.v1();
    item.createDate = new Date().toLocaleDateString();
    db('questionnaires').push(item).then(() => {
        res.json({ 'success': true, data: item });
    });
});

//删除已有问卷
server.get('/questionnaire/delete/:id', (req, res) => {
    db('questionnaires').remove({ id: req.params.id }).then(() => {
        res.json({ 'success': true });
    });
});

//获取所有问卷
server.get('/questionnaires', (req, res) => {
    const questionnaires = db('questionnaires');
    res.json({ 'success': true, data: questionnaires });
});

//根据id获取问卷数据
server.get('/questionnaire/:id', (req, res) => {
    const questionnaire = db('questionnaires').find({ id: req.params.id });
    res.json({ 'success': true, data: questionnaire });
});

//更新已有问卷
server.post('/questionnaire/update', (req, res) => {
    const item = req.body;
    db('questionnaires').chain().find({ id: item.id }).assign(item).value();
    res.json({ 'success': true, data: item });
});

//发布问卷
server.get('/questionnaire/publish/:id', (req, res) => {
    const item = db('questionnaires').chain().find({ id: req.params.id });
    item.assign({ state: 1 }).value();
    res.json({ 'success': true, data: item });
});
// 回收问卷
server.get('/questionnaire/finish/:id', (req, res) => {
    const item = db('questionnaires').chain().find({ id: req.params.id });
    item.assign({ state: 2 }).value();
    res.json({ 'success': true, data: item });
});

// 获取用户
server.get('/user/:username', function(req, res) {
    var user = db('user')
        .find({
            username: req.params.username
        });
    res.json({
        success: true,
        data: {
            username: user.username,
            createDate: user.createDate
        }
    });
});
//User Registration
server.post('/user/add', function(req, res) {
    var item = req.body;
    var user = db('user')
        .find({
            username: item.username
        });
    if (user) {
        res.json({
            success: false,
            message: '"' + item.username + '" is exists'
        });
    } else {
        item.password = md5(item.password);
        item.createDate = new Date().toLocaleDateString();
        db('user')
            .push(item)
            .then(function() {
                res.json({
                    success: true
                });
            });
    }
});
//Login
server.post('/login', function(req, res) {
    var data = req.body || {};
    var username = data.username;
    var user = db('user')
        .find({
            username: username
        });
    if (user && user.password === md5(data.password)) {
        res.json({
            success: true
        });
    } else {
        res.json({
            success: false,
            message: 'Username or password error'
        });
    }
});
//路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);
//启动服务，并监听5000端口
server.listen(5000, () => {
    console.log('Server is running at ', 5000, dbfile);
});