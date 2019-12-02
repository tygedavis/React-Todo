import React from 'react';

class TodoForm extends React.Component {
  
  
  render() {
    console.log('rendering form...');
    return(
      <form>
        <div>
          <input placeholder='What do you have to do?'/>
          <button>Submit</button>
        </div>
        <button>Clear All</button>
      </form>
    );
  };
};

export default TodoForm;