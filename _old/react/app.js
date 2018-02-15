class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'World',
			counter: 0,
			unrelated: 0,
		};
		window.globalApp = this;
    }
    increment() {
    	console.log('incrementing');
		console.log('counter before setState()', this.state.counter);
		this.setState((prevState) => ({counter: prevState.counter + 1}));
		// this.state.counter = this.state.counter + 1; // MAL -> React no se entera del cambio
		// this.setState({counter: this.state.counter + 1});  // TAMBIEN MAL -> asumes que state es el que debe ser
		console.log('counter after setState()', this.state.counter);
	}
	incrementUnrelated() {
		this.setState((prevState) => ({unrelated: prevState.unrelated + 100}));
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
