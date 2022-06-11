import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import TodoList from './Todos/TodoList';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/todos' element={<TodoList />} />
            <Route path='/about' element={<MyComponent />} />
            <Route exact path='/users' element={<ListUser />} />
            <Route path='/users/:id' element={<DetailUser />} />
          </Routes>
        </header>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
