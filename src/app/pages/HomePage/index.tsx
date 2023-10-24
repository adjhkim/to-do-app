import TodoItem from 'app/components/TodoItem';
import TodoInput from 'app/components/TodoInput';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

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
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const ToDoList = styled.div``;

export function HomePage() {
  const [todoList, setTodoList] = React.useState<ITodoItem[]>([
    {
      id: '1',
      content: 'first to-do',
      completed: true,
      editing: false,
    },
    {
      id: '2',
      content: 'second to-do',
      completed: true,
      editing: false,
    },
    {
      id: '3',
      content: 'third to-do',
      completed: true,
      editing: false,
    },
  ]);

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
            setTodoList={(todo: ITodoItem) => setTodoList([todo, ...todoList])}
          />
          <ToDoList>
            {todoList.map(todo => (
              <TodoItem todo={todo} />
            ))}
          </ToDoList>
        </Box>
      </Wrapper>
    </>
  );
}
