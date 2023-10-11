import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
