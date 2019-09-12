class AllTodos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		console.log("Component mounted");
		$.getJSON('/api/v1/todos.json',
			(response) => { this.setState({ todos: response }) });
	}

	render() {
		var todos = this.state.todos.map((todo) =>{
			return (
				<div key={todo.id}>
					<h3>{todo.title}</h3>
					<p>{todo.details}</p>
					<p>{todo.when}</p>
				</div>
			)
		});

		return (
			<div>
				{todos}
			</div>
		)
	}
}