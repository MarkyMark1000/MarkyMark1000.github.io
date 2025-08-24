import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Repos from './pages/Repos';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repos" element={<Repos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
