import React from 'react';
import { useState } from 'react';
import './TodoList.scss';

import { toast } from 'react-toastify';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: todo,
      status: false,
    };

    if (!todo) {
      toast.error(`Missing todo`);
      return;
    }
    toast.success(`Adding success!`);
    setTodoList([...todoList, newTodo]);
    setTodo('');
    console.log(newTodo);
  };

  const handleDelete = (todo) => {
    const newTodoList = [...todoList].filter((item) => item.id !== todo.id);
    setTodoList(newTodoList);
    toast.success(`Delete success!`);
    console.log(todo);
  };

  const handleEditTodo = (todo) => {
    // let isEmptyObj = Object.keys(editTodo).length === 0;

    // Save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      // Khi input != rỗng và editTodo.id === todo.id
      const updatedTodoList = [...todoList];
      const objIndex = updatedTodoList.findIndex((item) => item.id === todo.id);
      updatedTodoList[objIndex].title = editTodo.title;

      setTodoList(updatedTodoList);
      setEditTodo({});
      toast.success(`Update Todo success!`);

      return;
    }

    // Edit
    setEditTodo(todo);
  };

  const handleOnChangeEdit = (e) => {
    let updateEdiTodo = { ...editTodo };
    updateEdiTodo.title = e.target.value;
    setEditTodo(updateEdiTodo);
  };

  let isEmptyObj = Object.keys(editTodo).length === 0; // Kiểm tra xem nếu editTodo bằng rỗng (length = 0) => isEmptyObj = true
  console.log(isEmptyObj);

  return (
    <>
      <p>Simple Todo App</p>
      <div className='todo-wrapper'>
        <form className='todo-form' onSubmit={handleSubmit}>
          <input
            type='text'
            value={todo}
            placeholder='Add todo...'
            onChange={(e) => {
              if (e.target.value.startsWith(' ')) {
                return;
              } else {
                setTodo(e.target.value);
              }
            }}
          />
          <button type='submit' className='add-btn'>
            Add
          </button>
        </form>
        <div className='todo-list'>
          {todoList.map((todo, index) => (
            <div className='todo-child' key={todo.id}>
              {isEmptyObj === true ? (
                <span>
                  {index + 1} - {todo.title}
                </span>
              ) : (
                <>
                  {/* Check xem nếu edit có id = với id của todo => hiện ra ô input/ nếu không thì hiện ra bình thường */}
                  {editTodo.id === todo.id ? (
                    <span>
                      {index + 1} -{' '}
                      <input
                        value={editTodo.title}
                        onChange={(e) => handleOnChangeEdit(e)}
                      />
                    </span>
                  ) : (
                    <span>
                      {index + 1} - {todo.title}
                    </span>
                  )}
                </>
              )}
              {/*  Nếu isEmptyObj = rỗng => chưa Edit => hiện ra như bình thường, nếu != rỗng sẽ in ra input để nhập edit */}
              <button className='edit-btn' onClick={() => handleEditTodo(todo)}>
                {isEmptyObj === false && editTodo.id === todo.id
                  ? 'Save'
                  : 'Edit'}
              </button>
              <button className='delete-btn' onClick={() => handleDelete(todo)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
