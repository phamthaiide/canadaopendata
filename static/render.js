class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			counter: 0
		}
	};
	render () {
		return (
			[
				<h1>Search Box, {this.props.name} </h1>,
				<form>
					<input type="text" placeholder="Search..." />
					<p>
						<input type="checkbox" />
						{' '}
						This is a checkbox
					</p>
				</form>
			]	
		);
	}
}

var Hello = <SearchBox name="Theo Pham" />;
ReactDOM.render(
	Hello, document.getElementById('container').getElementById('content'));