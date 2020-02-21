var fs = require('fs');
var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('./App');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    var html = ReactDOMServer.renderToString(React.createElement(App));
    var componentCode = fs.readFileSync('App.js').toString();
    response.end(`
        <html>
            <body>
                <div id="app">${html}</div>
                <script src="https://cdn.bootcss.com/react/16.12.0/umd/react.development.js"></script>
                <script src="https://cdn.bootcss.com/react-dom/16.12.0/umd/react-dom.development.js"></script>
                <script>
                    var React = window.React;
                    var ReactDOM = window.ReactDOM;

                    function require(name) { return window[name.replace(/^\\S/, s => s.toUpperCase())]; }
                    var module = {};

                    ${componentCode}

                    ReactDOM.hydrate(React.createElement(App), document.body.querySelector('#app'));
                </script>
            </body>
        </html>
    `);
}).listen(8888);
