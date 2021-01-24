import React from 'react';

const style = {
    backgroundColor: "#ad1500",
    width: "400px",
    minHeight: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "2px"
};

export const CompleteTodos = (props) => {
    const {todos, onClickBack, onClickDelete} = props;
    return (
        <div style={style}>
        <p className="title">完了のTodo</p>
          <ul>
          {todos.map((todo,index) => {
            return (
              <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
            );
          })}
          </ul>
      </div>
    )
};
