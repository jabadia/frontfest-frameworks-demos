class MyComponent extends React.Component {
	render() {
		return (<div></div>
			);
	}
}

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
		return (<div className='root'>
			Hello {this.state.greeting}!<br />
			counter: {this.state.counter}<br />
			doubleCounter: {doubleCounter}<br />
			tripleCounter: {tripleCounter}<br />
			unrelated: {this.state.unrelated}<br />
			<button onClick={this.increment.bind(this)}>increment</button><br />
			<button onClick={this.incrementUnrelated.bind(this)}>increment unrelated</button>
		</div>);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
