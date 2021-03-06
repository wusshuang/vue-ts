module.exports = {
  html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1.0">
          <link rel="icon" href="<%= BASE_URL %>favicon.ico">
          <title>vue-typescript-template</title>
        </head>
        <body>
        <noscript>
          <strong>We're sorry but vue-typescript-template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
        <div id="app"></div>
        </body>
        </html>`,
  cdnHtml: `<!DOCTYPE html>
          <html lang="zh-CN">
          
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <link rel="icon" href="<%= BASE_URL %>favicon.ico">
          
            <!-- 使用CDN加速的CSS文件，配置在vue.config.js下 -->
            <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.css) { %>
            <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="preload" as="style">
            <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet">
            <% } %>
          
            <!-- 使用CDN加速的JS文件，配置在vue.config.js下 -->
            <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.js) { %>
            <link href="<%= htmlWebpackPlugin.options.cdn.js[i] %>" rel="preload" as="script">
            <% } %>
          
            <title>vue-project-demo</title>
          </head>
          
          <body>
            <noscript>
              <strong>We're sorry but vue-project-demo doesn't work properly without JavaScript enabled. Please enable it to
                continue.</strong>
            </noscript>
            <div id="app"></div>
            <!-- 使用CDN加速的JS文件，配置在vue.config.js下 -->
            <% for (var i in htmlWebpackPlugin.options.cdn&&htmlWebpackPlugin.options.cdn.js) { %>
            <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
            <% } %>
            <!-- built files will be auto injected -->
          </body>
          
          </html>`
}
