import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
