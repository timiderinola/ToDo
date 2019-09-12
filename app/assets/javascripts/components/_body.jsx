class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.removeTodoClient = this.removeTodoClient.bind(this);
	}

	componentDidMount() {
		console.log("Component mounted");
		$.getJSON('/api/v1/todos.json',
			(response) => { this.setState({ todos: response }) });
	}

	handleFormSubmit(todo) {
    var newState = this.state.todos.concat(todo);
    this.setState({ todos: newState })
  }

  handleDelete(id) {
  	$.ajax({
  		url: `/api/v1/todos/${id}`,
  		type: 'DELETE',
  		success:() => {
  			this.removeTodoClient(id);
  		}
  	});
  }

  removeTodoClient(id) {
  	 var newTodos = this.state.todos.filter((todo) => {
        return todo.id != id;
    });

    this.setState({ todos: newTodos });
  }

	render() {
		return (
			<div>
				<NewTodo handleSubmit={this.handleFormSubmit} />
				<AllTodos todos={this.state.todos} handleDelete={this.handleDelete} />
			</div>
		);
	}
}