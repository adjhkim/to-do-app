import TodoItem from 'app/components/TodoItem';
import TodoInput from 'app/components/TodoInput';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useTodoSlice } from 'store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoListSelector } from 'store/todo/selector';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0, 0, 0, 0.18);
  border-radius: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100vh;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const ToDoList = styled.div`
  height: 450px;
  overflow-y: auto;
  @media (max-width: 425px) {
    height: calc(100vh - 128px);
  }
`;

export function HomePage() {
  const { TodoActions } = useTodoSlice();
  const todoList = useSelector(TodoListSelector);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="toDoApp Main" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>To Do List</Title>
          <TodoInput
            addTodo={(content: string) =>
              dispatch(TodoActions.addTodo(content))
            }
          />
          <ToDoList>
            {todoList.map(todo => (
              <TodoItem
                todo={todo}
                checkTodo={() =>
                  dispatch(TodoActions.checkTodo({ id: todo.id }))
                }
                editModeTodo={() =>
                  dispatch(TodoActions.editModeTodo({ id: todo.id }))
                }
                editTodo={(content: string) =>
                  dispatch(
                    TodoActions.editTodo({ id: todo.id, content: content }),
                  )
                }
                deleteTodo={() =>
                  dispatch(TodoActions.deleteTodo({ id: todo.id }))
                }
              />
            ))}
          </ToDoList>
        </Box>
      </Wrapper>
    </>
  );
}
