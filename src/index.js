import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Root from './Root'
import Add from './components/Add'
import Edit from './components/Edit'
import Main from './components/Main'
import SingleNote from './components/SingleNote'
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Main />} />
      <Route path='home' element={<Main />} />
      <Route path='add' element={<Add />} />
      <Route path='edit' element={<Edit />} />
      <Route path='singlenote' element={<SingleNote />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>

    </RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
