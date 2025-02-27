import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Messages from './components/Messages';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
