const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/posts', // Specify the route to proxy
    createProxyMiddleware({
      target: 'http://localhost:6000/posts', // Your Express server URL
      changeOrigin: true,
    })
  );
};
