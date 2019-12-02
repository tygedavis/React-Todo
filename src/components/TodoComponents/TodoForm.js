import React from 'react';

class TodoForm extends React.Component {
  handleChanges = e => {
		// update state with each keystroke
		this.setState({
			newItem: e.target.value
		})
	}
  
  render() {
    console.log('rendering form...');
    return(
      <form>
        <div>
          <input 
            placeholder='What do you have to do?'
            type='text'
            // value={this.state.newTodo}
            onChange={this.handleChanges}
            />
          <button>Submit</button>
        </div>
        <button>Clear All</button>
      </form>
    );
  };
};

export default TodoForm;