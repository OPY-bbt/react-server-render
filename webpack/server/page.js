var React = require('react');
var ReactDOMServer = require('react-dom/server');
var App = require('../app/App');

module.exports = function() {
    var html = ReactDOMServer.renderToString(<App />);
    return `
        <html>
            <body>
                <div id="app">${html}</div>
                <script src="https://cdn.bootcss.com/react/16.12.0/umd/react.development.js"></script>
                <script src="https://cdn.bootcss.com/react-dom/16.12.0/umd/react-dom.development.js"></script>
                <script>
                    var react = window.React;
                </script>
                <script src="/dist/app.js"></script>
                <script>
                    ReactDOM.hydrate(React.createElement(App), document.body.querySelector('#app'));
                </script>
            </body>
        </html>
    `;
};
