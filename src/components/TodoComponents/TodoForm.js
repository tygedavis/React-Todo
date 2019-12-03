import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  handleChanges = e => {
		// update state with each keystroke
		this.setState({
			newTodo: e.target.value
		});
	};

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo)
    this.setState({
      newTodo: ''
    });
    // console.log('This is handle submit')
  };

  render() {
    console.log('rendering form...');
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <input 
            placeholder='What do you have to do?'
            type='text'
            value={this.state.newTodo}
            onChange={this.handleChanges}
            />
          <button>Add</button>
        </div>
        <button>Clear All</button>
      </form>
    );
  };
};

export default TodoForm;