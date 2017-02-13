//无法使用 import X from Y 的ES6语法，原生Node不支持;
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const low = require('lowdb');
const storage = require('lowdb/file-async');
//创建一个Express服务器
const server = jsonServer.create();
//使用json-server 默认选择的中间件(logger、static、cors和no-cache)
server.use(jsonServer.defaults());
//使用 body-parser 中间件
server.use(bodyParser.json());

const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';
//创建一个lowdb实例
const db = low(dbfile, { storage });
//路由配置
const router = jsonServer.router(dbfile);
server.use('/api', router);

//启动服务，并监听5000端口
server.listen(5000, () => {
    console.log('Server is running at ', 5000, dbfile);
});