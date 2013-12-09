var React = require('react');

// This could use JSX if we wanted; doesn't matter.
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return React.DOM.div(
      {},
      React.DOM.input({type: 'text', defaultValue: 'Edit me!'}),
      'Seconds Elapsed: ', this.state.secondsElapsed
    );
  }
});

module.exports = Timer;
