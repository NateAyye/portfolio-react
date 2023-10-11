import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  return (
    <>
      <Navbar setHeaderHeight={setHeaderHeight} />
      <main style={{ paddingTop: `${headerHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
