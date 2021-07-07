import React from 'react';

import './Todo.css';

const Todo = props => {
  console.log(props.item, 'props')

  return (
    <div className={`${props.item.completed ? 'completed' : ''}`} onClick={() => props.handleComplete(props.item.id)}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;