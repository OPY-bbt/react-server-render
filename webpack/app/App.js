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

        return (
            <div>
                <div>hello {content}</div>
                <button onClick={this.handleClick}>click me!</button>
            </div>
        );
    }
}

module.exports = App;