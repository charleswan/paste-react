const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports =function (app) {
//   app.use(
//     createProxyMiddleware('/api', {
//       target:'http://iot-demo-web-server-dev.autel.com',
//       changeOrigin:true,
//     })
//   )
  app.use(
    '/test01',
     createProxyMiddleware({
      target:'http://localhost:8866',
      pathRewrite: {'^/test01': '/demo01/test01'},
      changeOrigin: true
    })
  );
}