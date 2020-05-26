import React, { useState } from 'react';
import { MyLi } from './styles';

const Item = ({ content, id, number, deleteTodo }) => {
  const [isDone, setIsDone] = useState(false)
  return (
    <MyLi>
      <input type="checkbox"
        onClick={() => {
          setIsDone(!isDone)
        }}
      />
      <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{number}{content}</span>
      <button onClick={() => {
        deleteTodo(id)
      }}
      >削除</button>
    </MyLi >
  );
};

//分割代入構文
//三項演算子→if文の変わりみたいなもの
//アイテムの状態を維持する→State
//mapを使って繰り返す

export default Item;

