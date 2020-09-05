/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import Todo from './components/Todo';
import Form from './components/Form'
import FilterButton from './components/FilterButton'

function App(props) {
  const tasklist = props.tasks.map(task => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed} 
    key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <Form />
    <h1>TodoMatic</h1>
    <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
    </div>
    <h2 id="list-heading">
      3 tasks remaining
    </h2>
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {tasklist}      
    </ul>
  </div>
);
}
export default App;