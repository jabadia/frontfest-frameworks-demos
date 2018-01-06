class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'World',
			counter: 0,
			unrelated: 0,
		}
		window.globalApp = this;
    }
    increment() {
    	console.log('incrementing');
		this.setState({counter: this.state.counter + 1});
		// this.state.counter = this.state.counter + 1;
	}
	incrementUnrelated() {
		this.setState({unrelated: this.state.unrelated + 100});
	}
	render() {
		console.log('rendering');
		const doubleCounter = this.state.counter * 2;
		console.log('calculating doubleCounter');
		const tripleCounter = doubleCounter * 3;
		console.log('calculating tripleCounter');
		return (<p>
			Hello {this.state.greeting}! 
			(counter: {this.state.counter})
			(doubleCounter: {doubleCounter})
			(tripleCounter: {tripleCounter})
			(unrelated: {this.state.unrelated})
			<button onClick={this.increment.bind(this)}>increment</button>
			<button onClick={this.incrementUnrelated.bind(this)}>increment unrelated</button>
		</p>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
