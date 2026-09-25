const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.type('text/html; charset=utf-8').send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
          }
          .card {
            text-align: center;
            padding: 48px 64px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          }
          h1 { font-size: 3rem; font-weight: 700; letter-spacing: 1px; }
          p { margin-top: 12px; opacity: 0.85; font-size: 1rem; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello World</h1>
          <p>这是用 Node.js + Express 构建的网站 · Running on Node.js</p>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}
