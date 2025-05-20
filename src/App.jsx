import React, { Suspense } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/auth/Login';
import CustomLoading from './components/shared/small/CustomLoading';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<CustomLoading />}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
