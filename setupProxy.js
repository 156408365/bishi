const proxy = require('http-proxy-middleware');
module.exports = function(app){
	app.use(proxy('/pc',{
		target:'http://www.mocky.io',
		host:'www.huajuanmall.com',
		changeOrigin:true
	}))
}