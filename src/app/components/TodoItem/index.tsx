import Checkbox from 'app/components/Checkbox';
import Block from 'app/components/Block';
import * as React from 'react';
import styled from 'styled-components';
import CircleButton from '../Button/CircleButton';
import TodoInput from '../TodoInput';

const Box = styled.div<{ isEditing: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 15px 15px 25px;
  width: 100%;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;

  & > .delete-button {
    display: none;
  }

  &:hover {
    & > .delete-button {
      display: flex;
    }
  }
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#212121')};
`;

export default function TodoItem({
  todo,
  checkTodo,
  editModeTodo,
  editTodo,
  deleteTodo,
}: {
  todo: ITodoItem;
  checkTodo: () => void;
  editModeTodo: () => void;
  editTodo: (todo: string) => void;
  deleteTodo: () => void;
}) {
  return (
    <Box isEditing={todo.editing}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Checkbox checked={todo.completed} onClick={() => checkTodo()} />
        <Block marginLeft="10px" />
        {todo.editing ? (
          <TodoInput
            editTodo={(todo: string) => {
              editTodo(todo);
              editModeTodo();
            }}
            isEditing={true}
            editContent={todo.content}
          />
        ) : (
          <TodoContent onClick={() => editModeTodo()} checked={todo.completed}>
            {todo.content}
          </TodoContent>
        )}
      </div>
      <CircleButton
        className="delete-button"
        onClick={() => deleteTodo()}
        Icon={() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
          </svg>
        )}
      />
    </Box>
  );
}
