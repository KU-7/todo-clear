import React from 'react';
import Item from './Item';
import { MyUl } from './styles';

const List = ({ todos, deleteTodo }) => {

  return (
    <MyUl>

      {/* <Item id={todos[0].id} content={todos[0].content}></Item>
      <Item id={todos[1].id} content={todos[1].content}></Item>
      <Item id={todos[2].id} content={todos[2].content}></Item> */}
      {
        todos.map((todo, index) => {
          return (
            <Item
              key={todo.id}
              content={todo.content}
              id={todo.id}
              number={index + 1}
              deleteTodo={deleteTodo}
            ></Item>
          );
        })
      }
    </MyUl >
  );
};

export default List;