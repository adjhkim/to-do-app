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
`;

const Title = styled.h1`
  margin: 0;
  padding: 15px 25px;
`;

const ToDoList = styled.div``;

const ToDoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="toDoApp Main" />
      </Helmet>
      <Wrapper>
        <Box>
          <Title>To Do List</Title>
          <TodoInput />
          <ToDoList>
            <TodoItem
              todo={{
                id: '1',
                completed: true,
                content: 'This is to-do 1',
                editing: false,
              }}
            />
            <TodoItem
              todo={{
                id: '2',
                completed: false,
                content: 'This is to-do 2',
                editing: false,
              }}
            />
          </ToDoList>
        </Box>
      </Wrapper>
    </>
  );
}
