import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  // console.log(props.handleComplete, ' props')
    return(
      <div>
        {props.todo.map(item => (
          <Todo key={item.id} item={item} handleComplete={props.handleComplete}/>
        ))}
      </div>
    );
};

export default TodoList;
