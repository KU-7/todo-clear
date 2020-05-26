import React, { useState } from 'react';
import Form from './Form';
import List from './List';
import { Title } from './styles';

import shortid from 'shortid';
import { clear } from 'sisteransi';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: shortid.generate(),
      content: '洗濯をする'
    },
    {
      id: shortid.generate(),
      content: '課題をする'
    },
    {
      id: shortid.generate(),
      content: '御飯を作る'
    }
  ]);

  const addTodo = (content) => {
    const newTodos = [
      ...todos,  //配列に中を展開する
      {
        id: shortid.generate(),
        content
      }
    ]
    setTodos(newTodos)
  };

  //削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  return (
    <>
      <Title>Todo App</Title>
      <Form
        todos={todos}
        setTodos={setTodos}
        addTodo={addTodo}

      ></Form>
      <List todos={todos} deleteTodo={deleteTodo}></List>
    </>
  );
};



export default App;