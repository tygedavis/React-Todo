import React from 'react';
import Todolist from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [{
  task: '',
  id: Date.now(),
  completed: false
}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state ={
      todo: todo,
    };
  };

  addTodo = event => {
    console.log(event);
    const newTodo = {
      task: event,
      id: Date.now(),
      completed: false
    }
    console.log(newTodo, ' newTodo')
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  //Requirements:
  // List of Todos, Input Field to display the todos, a submit button, and a clear all button
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todolist todo={this.state.todo}/>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
