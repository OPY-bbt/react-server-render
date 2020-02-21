var React = require('react');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};      
        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick() {
        this.setState({
            text: 'world',
        });
    }

    render() {
        var content = this.state.text || '';

        return React.createElement('div', null, [
            React.createElement('div', { key: 1 }, 'hello ' + content),
            React.createElement('button', { key: 2, onClick: this.handleClick }, 'click me!'),
        ]);
    }
}

module.exports = App;