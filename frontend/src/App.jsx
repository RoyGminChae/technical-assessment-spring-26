import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Header from './components/Header/Header.jsx';
import PastPvpPage from './pages/PastPvpPage/PastPvpPage.jsx';
import PostPvpPage from './pages/PostPvpPage/PostPvpPage.jsx';
import PopUp from './components/PopUp/Popup.jsx';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        index: true, // default child route
        element: <HomePage />,
      },
      {
        path: "/pastPvpPage",
        element: <PastPvpPage />
      },
      {
        path: "/postPvpPage",
        element: <PostPvpPage />
      }
    ],
  },
]);

function RootLayout() {
  return (
    <>
      <Header />
      <main className="content-container">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PopUp />
    </>
  )
}

export default App;
