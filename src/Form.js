import React, { useState } from 'react';
import { MyForm } from './styles';
import { Input } from './styles';
import { clear } from 'sisteransi';


const Form = ({ todos, setTodos, addTodo }) => {
  const [value, setValue] = useState('');
  console.log(value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      addTodo(value);
      setValue('');
    } else {
      alert('文字を入力して下さい');
    };
    // const newTodos = todos.concat({
    //   id: 4,
    //   content: "Hello!"
    // })
  };


  return (
    <MyForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => setValue('')}
      >Clear</button>
    </MyForm>
  );
};

export default Form;