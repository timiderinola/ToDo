class AllTodos extends React.Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id) {
		this.props.handleDelete(id);
	}

	render() {
		var todos = this.props.todos.map((todo) =>{
			return (
				<div key={todo.id}>
					<h3>{todo.title}</h3>
					<p>{todo.details}</p>
					<p>{todo.when}</p>
					<button onClick={this.handleDelete.bind(this, todo.id)}>Delete</button>
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