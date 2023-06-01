import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { ToDo } from './models/todo-item'
import { NotFound } from './pages/404'
import { ItemDescription } from './pages/ItemDescription'

const todo_s: ToDo[] = [
  {
    id: 0,
    text: 'Первое д-е',
    isDone: true
  },
  {
    id: 1,
    text: 'Второе д-е',
    isDone: false
  },
  {
    id: 2,
    text: 'Третье д-е',
    isDone: true
  },
  {
    id: 3,
    text: 'Четвертое д-е',
    isDone: false
  },
  {
    id: 4,
    text: 'Пятое д-е',
    isDone: false
  },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage todo_s={todo_s}/>}></Route>
        <Route path='/list/:id' element={<ItemDescription todo_s={todo_s}/>}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
